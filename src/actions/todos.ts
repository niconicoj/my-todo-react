export enum ActionTypes {
  ADD_TODO = '[todos] ADD_TODO',
  DELETE_TODO = '[todos] TOGGLE_TODO'
}

interface AddTodoAction {type: ActionTypes.ADD_TODO, payload: {title: string }}
interface DeleteTodoAction {type: ActionTypes.DELETE_TODO, payload: {id: string}}

// eslint-disable-next-line
function addTodo(title: string): AddTodoAction {
  return {type: ActionTypes.ADD_TODO,payload: {title: title}}
}

// eslint-disable-next-line
function deleteTodo(id: string): DeleteTodoAction {
  return {type: ActionTypes.DELETE_TODO,payload: {id: id}}
}

type TodoAction = AddTodoAction | DeleteTodoAction

export default TodoAction