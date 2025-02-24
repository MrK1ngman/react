import './App.css'
import Currencies from './components/Currencies/Currencies'
import Navigation from './components/Navigation/Navigation'
import NewsList from './components/News/NewsList'
import Widgets from './components/Widgets/Widgets'

function App() {
  return (
    <>
      <NewsList/>
      <Currencies/>
      <Navigation/>
      <form className='search'>
        <input className='search-input' type="text"/>
        <button className='search-btn'>Найти</button>
      </form>
      <Widgets/>
    </>
  )
}

export default App
