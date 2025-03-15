import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from './components/HomePage'
import NewPost from './components/NewPost';
import Post from './components/Post';
import EditPost from './components/editPost';

function App() {
  return (
    <Router>
      <div className='create-post'>
        <Link to='/posts/new'>
          <button  className='btn-create'>Создать пост</button>
        </Link>
      </div>
      <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/posts/new" element={<NewPost/>}/>
        <Route path="/posts/:id" element={<Post/>}/>
        <Route path="/posts/:id/edit" element={<EditPost/>}/>
      </Routes>
    </Router>
  )
}

export default App
