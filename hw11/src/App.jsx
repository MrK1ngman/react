import { useState } from 'react'
import './App.css'
import VideoList from './Components/VideoList';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState([
      {
          url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2025-03-03 13:24:00'
      },
      {
          url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2025-03-02 12:10:00'
      },
      {
          url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2025-03-03 23:16:00'
      },
      {
          url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2025-03-02 12:10:00'
      },
      {
          url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2025-03-03 16:17:00'
      },
      {
          url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2025-03-03 05:24:00'
      },
  ]);

  return (
      <VideoList list={list} />
  );
}

export default App
