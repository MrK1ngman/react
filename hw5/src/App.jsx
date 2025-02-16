import './App.css'
import * as etsy from './etsy.json'
import Listing from './components/Listing'

function App() {
  const itemlist = etsy.default;
  return (
    <div className="item-list">
      {
        itemlist.map(items =>
          <Listing key={items.listing_id} items={items}/>
        )
      }
    </div>
  )
}

export default App
