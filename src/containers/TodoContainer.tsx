import { connect } from 'react-redux'
import { startTodo, stopTodo, deleteTodo } from '../actions/todos'
import Todo from '../components/Todo'

export default connect<any, any, any>(null, {
  dispatchStart: startTodo,
  dispatchStop: stopTodo,
  dispatchDelete: deleteTodo
})(Todo)