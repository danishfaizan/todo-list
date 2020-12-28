export function getThemeClass(className, isDarkMode) {
  if (isDarkMode) {
    return `${className}--dark`;
  }
  return `${className}--light`;
}

export function somFunc() {}

export function getFromLocalStorage(key) {
  const savedTodos = window.localStorage.getItem(key);
  if (savedTodos) {
    return JSON.parse(savedTodos);
  }

  return undefined;
}

export function saveToLocalStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
  return value;
}
