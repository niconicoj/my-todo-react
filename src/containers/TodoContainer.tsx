import { connect } from 'react-redux'
import { startTodo, stopTodo, deleteTodo } from '../actions/todos'
import Todo from '../components/Todo'

export default connect<any, any, any>(null, {
  handleStart: startTodo,
  handleStop: stopTodo,
  handleDelete: deleteTodo
})(Todo)