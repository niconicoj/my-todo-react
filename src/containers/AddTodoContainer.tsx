import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'
import AddTodoDialog from '../components/AddTodoDialog'

export default connect<any, any, any>(null, {
  handleSubmit: addTodo
})(AddTodoDialog)