import React from 'react';
import PropTypes from 'prop-types';

function FilterBar({ getThemeClass, setFilterMethod, filterMethod }) {
  return (
    <div className={`filter-bar flex ${getThemeClass('filter-bar')}`}>
      <button
        type="button"
        className={filterMethod === 'all' ? 'active-filter' : undefined}
        onClick={() => setFilterMethod('all')}
      >
        All
      </button>
      <button
        type="button"
        className={filterMethod === 'active' ? 'active-filter' : undefined}
        onClick={() => setFilterMethod('active')}
      >
        Active
      </button>
      <button
        type="button"
        className={filterMethod === 'completed' ? 'active-filter' : undefined}
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
