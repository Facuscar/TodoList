import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {
    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
        
    }
    return (
    <input onChange = {onSearchValueChange} className="buscador" placeholder='Cebolla' value={searchValue}/>
    );
}

export default TodoSearch;