import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

import { ContactInputs } from 'components/contactInputs';

export class ContactForm extends Component {
  static propTypes = { onSubmitContact: PropTypes.func.isRequired };

  state = {
    inputName: '',
    inputNumber: '',
    agreed: false,
  };

  handleChange = e => {
    const { value, name, type, checked } = e.currentTarget;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitContact({ id: nanoid(), ...this.state });
    this.resetForm();
  };

  resetForm = () =>
    this.setState({
      inputName: '',
      inputNumber: '',
      agreed: false,
    });

  render() {
    const { handleSubmit, handleChange } = this;

    const { inputName, inputNumber, agreed } = this.state;

    return (
      <form className={s.Box} onSubmit={handleSubmit}>
        <ContactInputs
          inputName={inputName}
          inputNumber={inputNumber}
          handleChange={handleChange}
        />

        <label>
          I agree to the processing of data
          <input
            type="checkbox"
            name="agreed"
            checked={agreed}
            onChange={handleChange}
          />
        </label>

        <button type="submit" disabled={!agreed}>
          Add contact
        </button>
      </form>
    );
  }
}
