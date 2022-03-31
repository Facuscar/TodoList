import AppUI from './AppUI';
import '../common.css';
import { TodoProvider } from '../TodoContext'

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
