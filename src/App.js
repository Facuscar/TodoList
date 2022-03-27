import './App.css';
import TodoCounter from './TodoCounter';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import CreateTodoButton from './CreateTodoButton';
import TodoSearch from './TodoSearch';
import './common.css';
import {useState} from 'react'

const defaultTodos = [
  {text:'Cortar cebolla', completed:true},
  {text:'Tomar el curso de intro a React', completed:false},
  {text:'Llorar con la llorona', completed:false},
  {text: 'Hacer ejercicio', completed:false}
]
function App() {

  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos]
    newTodos[todoIndex].completed = newTodos[todoIndex].completed == true ? false : true
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    let newTodos = [...todos];
    newTodos = newTodos.filter(todo => todo.text != text);
    setTodos(newTodos);
  }

  return (
    <div className="todo-list">
    <TodoCounter completedTodos = {completedTodos} totalTodos = {totalTodos}/>

    <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

    <TodoList>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
      ))}
    </TodoList>

    <CreateTodoButton/>
    </div>
    
  );
}

export default App;
