import React from 'react';
import PropTypes from 'prop-types';

function FilterBar({ getThemeClass, setFilterMethod, filterMethod }) {
  const isActiveFilter = (buttonType) => buttonType === filterMethod;

  return (
    <div className={`filter-bar flex ${getThemeClass('filter-bar')}`}>
      <button
        type="button"
        className={`${isActiveFilter('all') ? 'active-filter' : undefined} ${getThemeClass('button')}`}
        onClick={() => setFilterMethod('all')}
      >
        All
      </button>
      <button
        type="button"
        className={`${isActiveFilter('active') ? 'active-filter' : undefined} ${getThemeClass('button')}`}
        onClick={() => setFilterMethod('active')}
      >
        Active
      </button>
      <button
        type="button"
        className={`${isActiveFilter('completed') ? 'active-filter' : undefined} ${getThemeClass('button')}`}
        onClick={() => setFilterMethod('completed')}
      >
        Completed
      </button>
    </div>
  );
}

FilterBar.propTypes = {
  getThemeClass: PropTypes.func.isRequired,
  setFilterMethod: PropTypes.func.isRequired,
  filterMethod: PropTypes.string.isRequired,
};

export default FilterBar;
