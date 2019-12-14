import { connect } from 'react-redux'
import { State } from '../reducers'
import { getTodos } from '../selectors/todos'
import { deleteTodo } from '../actions/todos'
import TodosList from '../components/TodosList'

const mapStateToProps = (state: State) => ({
  todos: getTodos(state)
})

const mapDispatchToProps = {
  onTodoClicked: deleteTodo
}

export default connect<any, any, any, any>(mapStateToProps, mapDispatchToProps)(TodosList)