import './TodoSearch.css'
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch() {

    const {searchValue, setSearchValue} = useContext(TodoContext);

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
        
    }
    return (
    <input onChange = {onSearchValueChange} className="buscador" placeholder='Filtra aqui..' value={searchValue}/>
    );
}

export default TodoSearch;