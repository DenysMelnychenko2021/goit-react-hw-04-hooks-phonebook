import { useState, useEffect } from 'react';

import { Container } from 'components/container';
import { Section } from 'components/section';
import { ContactForm } from 'components/contactForm';
import { Contacts } from 'components/contacts';
import { Filter } from 'components/filter';
import { ContactList } from 'components/contactList';

import data from 'data/data.json';
const parseContacts = JSON.parse(window.localStorage.getItem('contacts'));

export const Phonebook = () => {
  const [contacts, setContacts] = useState(
    () => parseContacts ?? [...data.contacts],
  );
  const [filterValue, setFilterValue] = useState('');

  useEffect(
    () => window.localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts],
  );

  const addContactSubmit = newContact => {
    if (contacts.find(contact => newContact.inputName === contact.inputName))
      alert(`${newContact.inputName} is already in contacts`);
    else if (
      contacts.find(contact => newContact.inputNumber === contact.inputNumber)
    )
      alert(` this number ${newContact.inputNumber} is already in contacts`);
    else setContacts(prevContacts => [{ ...newContact }, ...prevContacts]);
  };

  const handleFilterChange = ({ currentTarget }) => {
    const { value } = currentTarget;
    setFilterValue(value);
  };

  const getHandlerFilter = () => {
    return contacts.filter(contact =>
      contact.inputName.toLowerCase().includes(filterValue.toLowerCase()),
    );
  };

  const getBlur = () => {
    setTimeout(() => {
      setFilterValue('');
    }, 500);
  };

  const getClickDelete = idContact =>
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== idContact),
    );

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
              contacts={getHandlerFilter()}
              onDelete={getClickDelete}
            />
          ) : (
            'There are no contacts in the phone book. Please add a contact'
          )}
        </Contacts>
      </Section>
    </Container>
  );
};
