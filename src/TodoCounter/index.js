import './TodoCounter.css';
import {useContext} from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter() {

    const {completedTodos, totalTodos} = useContext(TodoContext)

    let title = '';

    if(totalTodos>0){
        if(totalTodos == completedTodos){
            title = '¡Eso es todo! Ya puedes descansar'
        } else{
            title = `Has completado ${completedTodos} de ${totalTodos} tareas`
        }
    } else{
        title = 'Aún no tienes ninguna tarea'
    }

    return ( 
        <h2 className='TodoCounter'>{title}</h2>
     );
}

export default TodoCounter;