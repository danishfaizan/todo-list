export default function todoReducer(isDarkMode = false, action) {
  if (action.type === 'TOGGLE_DARK_MODE') {
    return !isDarkMode;
  }

  return isDarkMode;
}
