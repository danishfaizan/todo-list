import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTodoBar from './AddTodoBar';
import TodoList from './TodoList';
import FilterBar from './FilterBar';
import './style.css';
import darkModeIcon from '../images/icon-moon.svg';
import lightModeIcon from '../images/icon-sun.svg';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      incompleteItems: 0,
      filterMethod: 'all',
      isDarkMode: false,
    };
  }

  getActiveTodos() {
    const { todoList } = this.state;
    return todoList.filter(({ isCompleted }) => !isCompleted);
  }

  getCompletedTodos() {
    const { todoList } = this.state;
    return todoList.filter(({ isCompleted }) => isCompleted);
  }

  deleteTodo = (idToDelete) => {
    const { todoList, incompleteItems } = this.state;

    const updatedList = todoList.filter(({ id, isCompleted }) => {
      if (id === idToDelete) {
        if (!isCompleted) {
          this.setState({ incompleteItems: incompleteItems - 1 });
        }
        return false;
      }
      return true;
    });
    this.setState({
      todoList: updatedList,
    });
  };

  addTodo = (data) => {
    const { todoList, incompleteItems } = this.state;

    this.setState({
      todoList: [
        ...todoList,
        {
          id: uuidv4(),
          data,
          isCompleted: false,
        },
      ],
    });
    this.setState({ incompleteItems: incompleteItems + 1, filterMethod: 'all' });
  };

  toggleTodo = (toggleId) => {
    const { todoList, incompleteItems } = this.state;

    let updatedTodo;
    const updatedList = todoList.filter((todo) => {
      if (todo.id === toggleId) {
        updatedTodo = todo;
        updatedTodo.isCompleted = !updatedTodo.isCompleted;
        if (todo.isCompleted) {
          this.setState({ incompleteItems: incompleteItems - 1 });
        } else {
          this.setState({ incompleteItems: incompleteItems + 1 });
        }

        return false;
      }
      return true;
    });

    if (updatedTodo) {
      updatedList.unshift(updatedTodo);
    }

    this.setState({
      todoList: updatedList,
    });
  };

  clearCompleteTodos = () => {
    const { todoList } = this.state;

    const updatedList = todoList.filter((todo) => !todo.isCompleted);
    this.setState({ todoList: updatedList });
  };

  getFilteredTodos = () => {
    const { todoList, filterMethod } = this.state;

    if (filterMethod === 'completed') {
      return this.getCompletedTodos();
    }
    if (filterMethod === 'active') {
      return this.getActiveTodos();
    }
    return todoList;
  };

  setFilterMethod = (filterMethod) => {
    this.setState({ filterMethod });
  };

  reorderTodos = (sourceIndex, destinationIndex) => {
    const filteredTodos = this.getFilteredTodos();
    const todoCopy = [...filteredTodos];
    todoCopy.splice(sourceIndex, 1);
    todoCopy.splice(destinationIndex, 0, filteredTodos[sourceIndex]);

    const { filterMethod } = this.state;

    if (filterMethod === 'completed') {
      this.setState({ todoList: [...todoCopy, ...this.getActiveTodos()] });
    } else {
      this.setState({ todoList: [...this.getCompletedTodos(), ...todoCopy] });
    }
  };

  toggleDarkMode = () => {
    const { isDarkMode } = this.state;

    this.setState({ isDarkMode: !isDarkMode });
  };

  getThemeClass = (className) => {
    const { isDarkMode } = this.state;

    if (isDarkMode) {
      return `${className}--dark`;
    }
    return `${className}--light`;
  };

  render() {
    const { isDarkMode, incompleteItems, filterMethod } = this.state;

    return (
      <div className={`wrapper ${this.getThemeClass('wrapper')}`}>
        <header className={`${this.getThemeClass('header')}`}>
          <nav className="container flex">
            <h1>TODO</h1>
            <button type="button" onClick={this.toggleDarkMode}>
              <img src={isDarkMode ? lightModeIcon : darkModeIcon} alt="dark mode" />
            </button>
          </nav>
          <AddTodoBar addTodo={this.addTodo} />
        </header>
        <main className="container">
          <TodoList
            todos={this.getFilteredTodos()}
            toggleTodo={this.toggleTodo}
            deleteTodo={this.deleteTodo}
            incompleteItems={incompleteItems}
            clearCompleteTodos={this.clearCompleteTodos}
            reorderTodos={this.reorderTodos}
            getThemeClass={this.getThemeClass}
          />
          <FilterBar
            getThemeClass={this.getThemeClass}
            setFilterMethod={this.setFilterMethod}
            filterMethod={filterMethod}
          />
        </main>
        <footer className="container">
          <p>Drag and drop to reorder list</p>
        </footer>
      </div>
    );
  }
}

export default App;
