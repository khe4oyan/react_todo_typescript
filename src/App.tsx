import React from 'react';
import './App.css';
import 'resetcss_khc/index.css';
import TodoAddPanel from './components/TodoAddPanel/TodoAddPanel';
import Todos from './components/Todos/Todos';
import { TodoType } from './types/types';

export default function App() {
  const [todos, setTodos] = React.useState<Array<TodoType>>([
    {
      id: 0,
      title: 'Learn: how to fly ?',
      isDone: false,
    },
    {
      id: 1,
      title: 'Make Best Todo',
      isDone: true,
    },
  ]);

  return (
    <div className='app'>
      <TodoAddPanel setTodos={ setTodos }/>
      <Todos todos={ todos } setTodos={ setTodos } />
    </div>
  )
}
