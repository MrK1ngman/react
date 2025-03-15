import { Link } from "react-router-dom";

function NewPost() {
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const data = e.target.textInput.value.trim()
        e.target.textInput.value = '';
        fetch('http://localhost:7070/posts', {
            method: 'POST',
            body: JSON.stringify({"content": data}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    
    return (
        <div className="addPost">
            <h4 className="title">Введите текст поста</h4>
            <Link to='/' className="close">
                <button className="btn-close">X</button>
            </Link>
            <form className="create" onSubmit={handleSubmitForm}>
                <input className="textInput" name="textInput" type="text" required/>
                <button className="btn-post">Опубликовать</button>
            </form>
        </div>
    )
}

export default NewPost