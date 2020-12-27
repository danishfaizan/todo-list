import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getThemeClass } from '../utils';

function FilterBar({ setFilterType, filterType, isDarkMode }) {
  const isActiveFilter = (buttonType) => buttonType === filterType;

  return (
    <div className={`filter-bar flex ${getThemeClass('filter-bar', isDarkMode)}`}>
      <button
        type="button"
        className={`${isActiveFilter('all') ? 'active-filter' : undefined} ${getThemeClass(
          'button',
          isDarkMode,
        )}`}
        onClick={() => setFilterType('all')}
      >
        All
      </button>
      <button
        type="button"
        className={`${isActiveFilter('active') ? 'active-filter' : undefined} ${getThemeClass(
          'button',
          isDarkMode,
        )}`}
        onClick={() => setFilterType('INCOMPLETE')}
      >
        Active
      </button>
      <button
        type="button"
        className={`${isActiveFilter('completed') ? 'active-filter' : undefined} ${getThemeClass(
          'button',
          isDarkMode,
        )}`}
        onClick={() => setFilterType('COMPLETED')}
      >
        Completed
      </button>
    </div>
  );
}

FilterBar.propTypes = {
  setFilterType: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

function mapStateToProps({ isDarkMode }) {
  return {
    isDarkMode,
  };
}

export default connect(mapStateToProps)(FilterBar);
