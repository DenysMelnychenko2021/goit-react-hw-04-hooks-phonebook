import { Component } from 'react';

import { Container } from 'components/container';
import { Section } from 'components/section';
import { ContactForm } from 'components/contactForm';
import { Contacts } from 'components/contacts';
import { Filter } from 'components/filter';
import { ContactList } from 'components/contactsList';

import data from 'data/data.json';

export class Phonebook extends Component {
  state = { ...data, filterValue: '' };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    parseContacts && this.setState({ contacts: parseContacts });
  }

  componentDidUpdate(prevState) {
    this.state.contacts !== prevState.contacts &&
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addContactSubmit = newContact => {
    const { contacts } = this.state;
    if (contacts.find(contact => newContact.inputName === contact.inputName))
      alert(`${newContact.inputName} is already in contacts`);
    else if (
      contacts.find(contact => newContact.inputNumber === contact.inputNumber)
    )
      alert(` this number ${newContact.inputNumber} is already in contacts`);
    else
      this.setState(({ contacts }) => ({
        contacts: [{ ...newContact }, ...contacts],
      }));
  };

  getClickDelete = idContact =>
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(contact => contact.id !== idContact),
      };
    });

  handleFilterChange = ({ currentTarget }) => {
    const { value } = currentTarget;
    this.setState({ filterValue: value });
  };

  getHandlerFilter = () => {
    const { contacts, filterValue } = this.state;
    return contacts.filter(contact =>
      contact.inputName.toLowerCase().includes(filterValue.toLowerCase()),
    );
  };
  getBlur = () => {
    setTimeout(() => {
      this.setState({ filterValue: '' });
    }, 500);
  };

  render() {
    const { addContactSubmit, getClickDelete, handleFilterChange, getBlur } =
      this;

    const { contacts, filterValue } = this.state;

    const visibleContacts = this.getHandlerFilter();

    return (
      <Container title="Phonebook">
        <Section>
          <ContactForm onSubmitContact={addContactSubmit} />
        </Section>
        <Section>
          <Contacts title="Contacts">
            {contacts.length > 1 && (
              <Filter
                filterValue={filterValue}
                onFilterChange={handleFilterChange}
                onBlur={getBlur}
              />
            )}
            {contacts.length > 0 ? (
              <ContactList
                contacts={visibleContacts}
                onDelete={getClickDelete}
              />
            ) : (
              'There are no contacts in the phone book. Please add a contact'
            )}
          </Contacts>
        </Section>
      </Container>
    );
  }
}
