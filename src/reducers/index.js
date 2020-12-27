import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import darkModeReducer from './darkModeReducer';

export default combineReducers({ todos: todoReducer, isDarkMode: darkModeReducer });
