import './TodoCounter.css';

function TodoCounter({completedTodos,totalTodos}) {
    return ( 
        <h2 className='TodoCounter'>{totalTodos > 0 ? `Has completado ${completedTodos} de ${totalTodos} tareas` : 'Aún no tienes ninguna tarea ¡Crea una!'}</h2>
     );
}

export default TodoCounter;