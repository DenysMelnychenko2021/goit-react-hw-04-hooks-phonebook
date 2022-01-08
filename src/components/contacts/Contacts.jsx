import PropTypes from 'prop-types';
import s from './Contacts.module.css';

export const Contacts = ({ children, title }) => {
  return (
    <div>
      <h2 className={s.Heading}>{title}</h2>
      {children}
    </div>
  );
};

Contacts.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};
