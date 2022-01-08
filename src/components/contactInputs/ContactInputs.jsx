import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactInputs.module.scss';

const nameInputId = nanoid();
const numberInputId = nanoid();

export const ContactInputs = ({ inputName, inputNumber, handleChange }) => (
  <>
    <label htmlFor={nameInputId}>Name</label>
    <input
      className={s.Input}
      id={nameInputId}
      type="text"
      name="inputName"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      value={inputName}
      maxLength="14"
      required
      onChange={handleChange}
    />

    <label htmlFor={numberInputId}>Number</label>
    <input
      className={s.Input}
      id={numberInputId}
      type="tel"
      name="inputNumber"
      value={inputNumber}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      maxLength="14"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      onChange={handleChange}
    />
  </>
);

ContactInputs.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputNumber: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
};
