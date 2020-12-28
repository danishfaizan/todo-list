import { getFromLocalStorage, saveToLocalStorage } from '../utils';

export default function todoReducer(isDarkMode = getFromLocalStorage('isDarkMode') || false, action) {
  if (action.type === 'TOGGLE_DARK_MODE') {
    return saveToLocalStorage('isDarkMode', !isDarkMode);
  }

  return isDarkMode;
}
