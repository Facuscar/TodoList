import './App.css';
import TodoCounter from './TodoCounter';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import CreateTodoButton from './CreateTodoButton';
import TodoSearch from './TodoSearch';
import './common.css';

const todos = [
  {text:'Cortar cebolla', completed:true},
  {text:'Tomar el curso de intro a React', completed:false},
  {text:'Llorar con la llorona', completed:false}
]
function App() {
  return (
    <div className="todo-list">
    <TodoCounter/>

    <TodoSearch/>

    <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
      ))}
    </TodoList>

    <CreateTodoButton/>
    </div>
    
  );
}

export default App;
