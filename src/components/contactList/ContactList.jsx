import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { ContactsItem } from 'components/contactsItem';

export const ContactList = ({ contacts, onDelete }) => (
  <ul className={s.List}>
    {contacts.map(({ id, inputName, inputNumber }) => (
      <li className={s.Item} key={id}>
        <ContactsItem
          name={inputName}
          number={inputNumber}
          onDelete={() => onDelete(id)}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
