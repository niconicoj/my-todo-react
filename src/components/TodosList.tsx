import * as  React from 'react';
import Todo from '../containers/TodoContainer';
import ITodo from '../models/Todo';

interface Props {
  todos: ITodo[],
}

interface State {}

class TodosList extends React.Component<Props, State> {

  render() {
    const { todos } = this.props;
    return (
      <div>
        {todos.map( todo => (
          <Todo key={todo.id} todo={todo}/>
        ))}
      </div>
    )
  }
}

export default TodosList;