import './TodoSearch.css'

function TodoSearch() {
    const buscarTodo = (e) => {
        console.log(e.target.value)
    }
    return ( 
        <input onChange = {buscarTodo} className="buscador" placeholder='Cebolla' />
     );
}

export default TodoSearch;