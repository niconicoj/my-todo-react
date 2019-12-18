export enum ActionTypes {
  ADD_TODO = '[todos] ADD_TODO',
  DELETE_TODO = '[todos] DELETE_TODO',
  START_TODO = '[todos] START_TODO',
  STOP_TODO = '[todos] STOP_TODO',
}

interface AddTodoAction {type: ActionTypes.ADD_TODO, payload: {title: string }}
interface DeleteTodoAction {type: ActionTypes.DELETE_TODO, payload: {id: string}}
interface StartTodoAction {type: ActionTypes.START_TODO, payload: {id:string}}
interface StopTodoAction {type: ActionTypes.STOP_TODO, payload: {id:string, elapsed: number}}

// eslint-disable-next-line
export function addTodo(title: string): AddTodoAction {
  return {type: ActionTypes.ADD_TODO,payload: {title: title}}
}
// eslint-disable-next-line
export function deleteTodo(id: string): DeleteTodoAction {
  return {type: ActionTypes.DELETE_TODO,payload: {id: id}}
}
// eslint-disable-next-line
export function startTodo(id: string): StartTodoAction {
  return {type: ActionTypes.START_TODO,payload: {id: id}}
}
// eslint-disable-next-line
export function stopTodo(id: string, elapsed: number): StopTodoAction {
  return {type: ActionTypes.STOP_TODO,payload: {id: id, elapsed: elapsed}}
}



type TodoAction = AddTodoAction | DeleteTodoAction | StartTodoAction | StopTodoAction

export default TodoAction