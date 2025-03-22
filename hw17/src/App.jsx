import { Provider } from 'react-redux'
import ItemForm from './Components/itemForm'
import store from './reduxe/Store'
import ItemList from './Components/ItemList'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <ItemForm/>
      <ItemList/>
    </Provider>
  )
}

export default App
