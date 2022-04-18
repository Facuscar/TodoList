import './TodoCounter.css';
import {useContext} from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter() {

    const {completedTodos, totalTodos} = useContext(TodoContext)

    return ( 
        <h2 className='TodoCounter'>{totalTodos > 0 ? `Has completado ${completedTodos} de ${totalTodos} tareas` : 'Aún no tienes ninguna tarea'}</h2>
     );
}

export default TodoCounter;