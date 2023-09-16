import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => (
  <input
    className={styles.input}
    type="text"
    name="filter"
    value={filter}
    onChange={onChange}
    placeholder="Search contacts"
  />
);
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
