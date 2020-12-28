export default function todoReducer(todos = [], { type, payload }) {
  switch (type) {
    case 'ADD_TODO':
      return [...todos, payload];

    case 'DELETE_TODO':
      return todos.filter((todo) => todo.id !== payload.id);

    case 'TOGGLE_TODO':
      return toggleTodo(todos, payload.id);

    case 'CLEAR_COMPLETED_TODOS':
      return todos.filter((todo) => todo.isCompleted === false);

    case 'REORDER_TODOS':
      return reorderTodos(todos, payload.sourceIndex, payload.destinationIndex);

    default:
      return todos;
  }
}

function toggleTodo(todos, id) {
  let todoIndex;
  const foundTodo = todos.find((todo, index) => {
    todoIndex = index;
    return todo.id === id;
  });
  foundTodo.isCompleted = !foundTodo.isCompleted;

  const todoCopy = [...todos];
  todoCopy.splice(todoIndex, 1);
  todoCopy.unshift(foundTodo);
  return todoCopy;
}

function reorderTodos(todos, sourceIndex, destinationIndex) {
  const todoCopy = [...todos];
  todoCopy.splice(sourceIndex, 1);
  todoCopy.splice(destinationIndex, 0, todos[sourceIndex]);

  return todoCopy;
}
