import TodoCounter from '../TodoCounter';
import TodoItem from '../TodoItem';
import TodoList from '../TodoList';
import CreateTodoButton from '../CreateTodoButton';
import TodoSearch from '../TodoSearch';


function AppUI(props) {
    return ( 
        <div className="todo-list">
            <TodoCounter completedTodos = {props.completedTodos} totalTodos = {props.totalTodos}/>

            <TodoSearch searchValue={props.searchValue} setSearchValue={props.setSearchValue} />

            <TodoList>
            {props.filteredTodos.map(todo => (
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => props.completeTodo(todo.text)} onDelete={() => props.deleteTodo(todo.text)} />
            ))}
            </TodoList>

            <CreateTodoButton/>
        </div>
     );
}

export default AppUI;