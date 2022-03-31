import {useContext} from 'react';
import { TodoContext } from '../TodoContext';
import {useState} from 'react';
import './TodoForm.css'

function TodoForm() {

    const [newTodoValue , setNewTodoValue] = useState('');

    const {
        addTodo,
        setOpenModal,
        openModal
    } = useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(openModal ? false : true);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(openModal ? false : true);
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    return ( 
        <form onSubmit={onSubmit}>
            <div className='form-textarea'>
                <label>Nueva tarea</label>
                <textarea placeholder="Cortar la cebolla para el almuerzo"  value={newTodoValue} onChange={onChange}/>
            </div>

            <div className="opciones">
                <button type="button" onClick={onCancel} className="boton cancel" >
                    Cancelar
                </button>

                <button type="submit" className='boton add'>
                    Agregar
                </button>
            </div>
        </form>
     );
}

export default TodoForm;