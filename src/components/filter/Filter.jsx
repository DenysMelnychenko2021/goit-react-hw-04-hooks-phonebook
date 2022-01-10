import PropTypes from 'prop-types';
import s from './Filter.module.css';

export const Filter = ({ filterValue, onFilterChange, onBlur }) => {
  return (
    <input
      className={s.Input}
      type="text"
      value={filterValue}
      onChange={onFilterChange}
      onBlur={onBlur}
      placeholder="Find contacts by name"
    />
  );
};
Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
