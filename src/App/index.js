import AppUI from './AppUI';
import '../common.css';
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
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]
    newTodos[todoIndex].completed = newTodos[todoIndex].completed === true ? false : true
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    let newTodos = [...todos];
    newTodos = newTodos.filter(todo => todo.text !== text);
    setTodos(newTodos);
  }

  return (
    <AppUI 
      completedTodos = {completedTodos} totalTodos = {totalTodos} completeTodo = {completeTodo} deleteTodo = {deleteTodo} setSearchValue={setSearchValue} filteredTodos={filteredTodos}
    />
  );
}

export default App;
