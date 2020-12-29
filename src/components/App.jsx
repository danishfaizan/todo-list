import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodoBar from './AddTodoBar';
import TodoList from './TodoList';
import FilterBar from './FilterBar';
import './style.css';
import darkModeIcon from '../images/icon-moon.svg';
import lightModeIcon from '../images/icon-sun.svg';
import { getThemeClass } from '../utils';
import { toggleDarkMode } from '../actions';

function App({ isDarkMode, toggleDarkModeAction }) {
  const [filterType, setFilterType] = useState('ALL');

  return (
    <div className={`wrapper ${getThemeClass('wrapper', isDarkMode)}`}>
      <header className={`${getThemeClass('header', isDarkMode)}`}>
        <nav className="container flex">
          <h1>TODO</h1>
          <button type="button" onClick={toggleDarkModeAction}>
            <img src={isDarkMode ? lightModeIcon : darkModeIcon} alt="dark mode" />
          </button>
        </nav>
        <AddTodoBar filterType={filterType} setFilterType={setFilterType} />
      </header>
      <main className="container">
        <TodoList filterType={filterType} />
        <FilterBar setFilterType={setFilterType} filterType={filterType} />
      </main>
      <footer className="container">
        <p>Drag and drop to reorder list</p>
      </footer>
    </div>
  );
}

App.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkModeAction: PropTypes.func.isRequired,
};

function mapStateToProps({ isDarkMode }) {
  return {
    isDarkMode,
  };
}

export default connect(mapStateToProps, { toggleDarkModeAction: toggleDarkMode })(App);
