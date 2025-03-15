import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function EditPost() {
    let navigate = useNavigate()
    const [post, setPost] = useState({})
    const { id } = useParams()

    useEffect(() => {
      fetch(`http://localhost:7070/posts/${id}`)
        .then(response => response.json())
        .then(data => {
            setPost(data.post)
        })
    }, [id])
  
    const UpdateFetch = () => {
        fetch(`http://localhost:7070/posts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        })
        navigate(`/`);
    }
    
    return (
      <div className="editPanel">
        <textarea className='editText'
            placeholder="Введите текст поста"
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
        />
        <button className="save" onClick={UpdateFetch}>
            Сохранить
        </button>
      </div>
    )
}

export default EditPost