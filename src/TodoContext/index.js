import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import useLocalStorage from './useLocalStorage'

const TodoContext = createContext();

function TodoProvider(props){

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);
    
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

    const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]
    newTodos[todoIndex].completed = newTodos[todoIndex].completed === true ? false : true
    saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
    let newTodos = [...todos];
    newTodos = newTodos.filter(todo => todo.text !== text);
    saveTodos(newTodos);
    }

    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            completed:false,
            text: text
        });
        saveTodos(newTodos);
        }

    useEffect( () => {
    console.log('Use effect llamado');
    }, [totalTodos]);

    return(
        <TodoContext.Provider value={{
            completedTodos : completedTodos, 
            totalTodos : totalTodos, 
            completeTodo : completeTodo, 
            deleteTodo : deleteTodo, 
            setSearchValue: setSearchValue, 
            filteredTodos: filteredTodos,
            loading : loading,
            error : error,
            searchValue : searchValue,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}


<TodoContext.Consumer></TodoContext.Consumer>

export { TodoContext, TodoProvider }