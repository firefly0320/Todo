
import './App.css'
import AddTodo from './components/AddTodo'
import { store } from './App/store';
import { Provider } from 'react-redux';
import Todo from './components/Todo';




function App() {
  

  return (
  <Provider store={store}>
    <AddTodo/>
    <Todo/>
  </Provider>
  )
}

export default App
