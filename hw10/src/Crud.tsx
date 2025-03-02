import { useEffect, useState } from "react";

function Crud() {
    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        try {
            const response = await fetch('http://localhost:7070/notes');
            
            if(!response.ok) throw new Error('Ошибка подключения')
            
            const data = await response.json();
            setNotes(data);
        } catch (error) {
            console.log(error)
        }
    }

    const handlerSubmit = async (evt) => {
        evt.preventDefault();

        await fetch('http://localhost:7070/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({content: evt.target.inputNote.value})
        })

        fetchNotes();
        evt.target.inputNote.value = '';
    }

    const deleteNote = async (id) => {
        await fetch(`http://localhost:7070/notes/${id}`, {method: 'DELETE'});
        fetchNotes();
    }

    useEffect(() => {
        fetchNotes();
    }, [])
    
    return (
        <>
            <div className='header'>
              <h1 className='headerTitle'>Notes</h1>
              <button className='refresh' onClick={fetchNotes}>↻</button>
            </div>
            <div className="notes">
                  {notes && notes.map(el =>
                      <div  className="note" key={el.id}>
                          <p>{el.content}</p>
                          <button className="delete" onClick={() => deleteNote(el.id)}>X</button>
                      </div >
                  )}
              </div>
            <div className='control'>
              <h4 className='title'>New Note</h4>
              <form className='addNote' onSubmit={handlerSubmit}>
                <input className='inputNote' name="inputNote" type="text" required/>
                <button className='btn'>⇨</button>
              </form>
            </div>
        </>  
    )
}

export default Crud;