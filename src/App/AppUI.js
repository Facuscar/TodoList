import TodoCounter from '../TodoCounter';
import TodoItem from '../TodoItem';
import TodoList from '../TodoList';
import CreateTodoButton from '../CreateTodoButton';
import TodoSearch from '../TodoSearch';
import { TodoContext } from '../TodoContext';


function AppUI() {
    return ( 
        <div className="todo-list">
            <TodoCounter/>

            <TodoSearch/>

            <TodoContext.Consumer>
                { value => {
                    return(
                        <TodoList>
                        {value.error && <p>Desespérate, hubo un error...</p>}
                        {value.loading && <p>Estamos cargando, no desesperes...</p>}

                        {value.filteredTodos.map(todo => (
                            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => value.completeTodo(todo.text)} onDelete={() => value.deleteTodo(todo.text)} />
                        ))}
                        </TodoList>
                    );
                }}
            </TodoContext.Consumer>

            <CreateTodoButton/>
        </div>
     );
}

export default AppUI;