import * as  React from 'react';
import Todo from './Todo';
import ITodo from '../models/Todo';

interface Props {
  todos: ITodo[],
  onTodoClicked: (todoId: string) => void
}

interface State {}

class TodosList extends React.Component<Props, State> {

  render() {
    const { todos, onTodoClicked } = this.props;
    return (
      <div>
        {todos.map( todo => (
          <Todo
          onDelete={() => onTodoClicked(todo.id)}
          display={true}
          todo={todo}/>
        ))}
      </div>
    )
  }
}

export default TodosList;