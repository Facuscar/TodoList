import AppUI from './AppUI';
import '../common.css';
import {useState} from 'react'

// const defaultTodos = [
//   {text:'Cortar cebolla', completed:true},
//   {text:'Tomar el curso de intro a React', completed:false},
//   {text:'Llorar con la llorona', completed:false},
//   {text: 'Hacer ejercicio', completed:false}
// ]

function useLocalStorage(itemName, initialValue){ 

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){
     localStorage.setItem(itemName, JSON.stringify(initialValue));
     parsedItem = initialValue;
  } else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    const stringfiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringfiedItem);
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]
    newTodos[todoIndex].completed = newTodos[todoIndex].completed === true ? false : true
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    let newTodos = [...todos];
    newTodos = newTodos.filter(todo => todo.text !== text);
    saveTodos(newTodos);
  }

  return (
    <AppUI 
      completedTodos = {completedTodos} totalTodos = {totalTodos} completeTodo = {completeTodo} deleteTodo = {deleteTodo} setSearchValue={setSearchValue} filteredTodos={filteredTodos}
    />
  );
}

export default App;
