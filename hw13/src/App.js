import './App.css';
import Deteails from './Components/Details';
import List from './Components/List';
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [activeUser, setActive] = useState(null);

  useEffect(() => {
      fetch(process.env.REACT_APP_USERS + '/users.json').then(response => response.json()).then(data => setUsers(data))
  }, [])

  const handlerUser = (id, name,) => {
    setActive({id: id, name: name});
  }

  return (
    <div className='app'>
      <List 
        users={users}
        handlerUser={handlerUser}
        activeUser={activeUser}
      />
      {activeUser && <Deteails info={activeUser}/>}
    </div>
  );
}

export default App;
