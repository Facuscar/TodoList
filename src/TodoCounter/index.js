import './TodoCounter.css';

function TodoCounter({completedTodos,totalTodos}) {
    return ( 
        <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} tareas</h2>
     );
}

export default TodoCounter;