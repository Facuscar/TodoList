import './App.css';
import TodoCounter from './TodoCounter';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import CreateTodoButton from './CreateTodoButton';

const todos = [
  {text:'Cortar cebolla', completed:'false'},
  {text:'Tomar el curso de intro a React', completed:'false'},
  {text:'Llorar con la llorona', completed:'false'}
]
function App() {
  return (
    <>
    <TodoCounter/>

    {/* <TodoSearch/> */}
    <input placeholder='Cebolla' />


    <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text}/>
      ))}
    </TodoList>

    <CreateTodoButton/>
    </>
    
  );
}

export default App;
