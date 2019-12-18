import { connect } from 'react-redux'
import { State } from '../reducers'
import { getTodos } from '../selectors/todos'
import TodosList from '../components/TodosList'

const mapStateToProps = (state: State) => ({
  todos: getTodos(state)
})

export default connect<any, any, any, any>(mapStateToProps, {})(TodosList)