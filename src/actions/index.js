import { v4 as uuidv4 } from 'uuid';

export function addTodo(todoValue) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uuidv4(),
      value: todoValue,
      isCompleted: false,
    },
  };
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    payload: {
      id,
    },
  };
}

export function updateTodo(id, todoValue) {
  return {
    type: 'UPDATE_TODO',
    payload: {
      id,
      value: todoValue,
    },
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: {
      id,
    },
  };
}

export function clearCompletedTodos() {
  return {
    type: 'CLEAR_COMPLETED_TODOS',
  };
}

export function reorderTodos(sourceIndex, destinationIndex) {
  return {
    type: 'REORDER_TODOS',
    payload: {
      sourceIndex,
      destinationIndex,
    },
  };
}

export function toggleDarkMode() {
  return {
    type: 'TOGGLE_DARK_MODE',
  };
}
