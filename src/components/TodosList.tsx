import * as  React from 'react';
import Todo from './Todo';
import ITodo from '../models/Todo';

interface Props {
  todos: ITodo[],
  onDelete: (todoId: string) => void
  onStart: (todoId: string) => void
}

interface State {}

class TodosList extends React.Component<Props, State> {

  render() {
    const { todos, onDelete, onStart } = this.props;
    return (
      <div>
        {todos.map( todo => (
          <Todo
          onDelete={() => onDelete(todo.id)}
          onStart={() => onStart(todo.id)}
          display={true}
          todo={todo}/>
        ))}
      </div>
    )
  }
}

export default TodosList;