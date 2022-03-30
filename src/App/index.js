import AppUI from './AppUI';
import '../common.css';
import { TodoContext } from '../TodoContext'

function App() {

  return (
    <TodoContext.Provider>
      <AppUI />
    </TodoContext.Provider>
  );
}

export default App;
