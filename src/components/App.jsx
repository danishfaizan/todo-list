import React from 'react';
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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filterType: 'ALL',
    };
  }

  setFilterType = (filterType) => {
    this.setState({ filterType });
  };

  render() {
    const { filterType } = this.state;
    const { isDarkMode, toggleDarkModeAction } = this.props;

    return (
      <div className={`wrapper ${getThemeClass('wrapper', isDarkMode)}`}>
        <header className={`${getThemeClass('header', isDarkMode)}`}>
          <nav className="container flex">
            <h1>TODO</h1>
            <button type="button" onClick={toggleDarkModeAction}>
              <img src={isDarkMode ? lightModeIcon : darkModeIcon} alt="dark mode" />
            </button>
          </nav>
          <AddTodoBar addTodo={this.addTodo} />
        </header>
        <main className="container">
          <TodoList filterType={filterType} />
          <FilterBar
            setFilterType={this.setFilterType}
            filterType={filterType}
          />
        </main>
        <footer className="container">
          <p>Drag and drop to reorder list</p>
        </footer>
      </div>
    );
  }
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
