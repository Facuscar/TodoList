import './TodoSearch.css'
import {useState} from 'react'



function TodoSearch() {
    const [searchValue, setSearchValue] = useState('')

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    }
    return  [
    <input onChange = {onSearchValueChange} className="buscador" placeholder='Cebolla' value={searchValue}/>,
        <p>{searchValue}</p>
    ];
}

export default TodoSearch;