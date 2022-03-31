import TodoCounter from '../TodoCounter';
import TodoItem from '../TodoItem';
import TodoList from '../TodoList';
import CreateTodoButton from '../CreateTodoButton';
import TodoSearch from '../TodoSearch';
import { TodoContext } from '../TodoContext';
import { useContext } from 'react'
import Modal from '../Modal';

function AppUI() {

    const value = useContext(TodoContext);

    return ( 
        <div className="todo-list">
            <TodoCounter/>

            <TodoSearch/>

            <TodoList>
            {value.error && <p>Desespérate, hubo un error...</p>}
            {value.loading && <p>Estamos cargando, no desesperes...</p>}

            {value.filteredTodos.map(todo => (
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => value.completeTodo(todo.text)} onDelete={() => value.deleteTodo(todo.text)} />
            ))}
            </TodoList>
                {value.openModal && (
                    <Modal>
                    <p>Teletransportacionnn</p>
                    </Modal>
                )}
            

            <CreateTodoButton/>
        </div>
     );
}

export default AppUI;