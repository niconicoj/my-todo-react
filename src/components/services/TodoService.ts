import { useEffect, useState } from 'react';
import { Service } from './Service';

export interface Todo {
  message: string
}

const TodoService = () => {
  const [result, setResult] = useState<Service<Todo>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('api/todo/nicolas')
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
}

export default TodoService