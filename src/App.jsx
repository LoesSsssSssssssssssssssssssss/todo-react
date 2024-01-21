import './App.css';
import Task from './Task';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const deleteTask = (todo) => {
    axios
      .delete(`http://localhost:3000/api/todos/${todo.id}`)
      .then((response) => {
        updateData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addTodo = () => {
    // if (todo !== '') {
    //   setTodos([...todos, todo]);
    //   setTodo('');
    // }

    if (todo !== '') {
      axios
        .post('http://localhost:3000/api/todos', {
          name: todo,
          isDone: 'false',
        })
        .then((response) => {
          setTodos([...todos, response.data]);
          setTodo('');
        })
        .catch((error) => {
          console.log(error, 'error');
        });
    }
  };

  const updateData = () => {
    axios
      .get('http://localhost:3000/api/todos')
      .then((data) => {
        setTodos(data.data);
      })
      .catch(setTodos([]));
  };

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/todos')
      .then((data) => {
        //console.log(data.data, 'data');
        setTodos(data.data);
      })
      .catch((e) => console.log(e, 'error'));
  }, []);

  useEffect(() => {
    console.log(todos, 'todos');
  }, [todos]);

  return (
    <div className="wrapper">
      <div className="bg-white shadow sm:rounded-lg w-6/12">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Введите задачу
          </h3>
          <div className="mt-5 sm:flex sm:items-center">
            <div className="w-full sm:max-w-xs">
              <input
                type="text"
                name="todo"
                id="task"
                value={todo}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 padding pl-5"
                placeholder="Введите задачу"
                onChange={(e) => {
                  setTodo(e.target.value);
                }}
              />
            </div>
            <button
              onClick={() => addTodo()}
              className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <Task todos={todos} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
