import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export class Filter extends Component {
  static propTypes = {
    filterValue: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  };

  render() {
    const { filterValue, onFilterChange, onBlur } = this.props;
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
  }
}
