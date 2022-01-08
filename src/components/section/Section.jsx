import PropTypes from 'prop-types';
import s from './Section.module.css';

export const Section = ({ children }) => {
  return <section className={s.Section}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node,
};
