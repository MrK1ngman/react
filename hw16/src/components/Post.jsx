import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { faker } from "@faker-js/faker";

function Post() {
    const [post, setPosts] = useState([])
    let { id } = useParams()
    let navigate = useNavigate()

    const deleteFetch = () => {
        fetch(`http://localhost:7070/posts/${id}`, {
            method: "DELETE",
        })
        navigate("/");
    }

    const editFetch = () => {
        navigate(`/posts/${id}/edit`);
    }

    useEffect(() => {
        fetch(`http://localhost:7070/posts/${id}`)
            .then(response => response.json())
            .then(data => setPosts(data.post))
    }, [id])

    return (
        <>
            {post && 
                <div className="post">
                    <div className="info">
                        <img className="avatar" src={`${faker.image.avatar()}`}/>
                        <h3 className="fullname">{faker.person.fullName()}</h3>
                    </div>
                    <p className="content">{post.content}</p>
                    <div className="control">
                        <div className="like">
                            <img src="https://ikonki.svgpng.ru/wp-content/uploads/2020/04/like-256x256.png"/>
                            Нравится
                        </div>
                        <div className="comments">
                            <img src="https://img.icons8.com/ios7/600/speech-bubble.png"/>
                            Комментировать
                        </div>
                    </div>
                    <div className="settings">
                        <button className="edit" onClick={editFetch}>Изменить</button>
                        <button className="delete" onClick={deleteFetch}>Удалить</button>
                    </div>
                </div>
            }
        </>
        
        
        
    )
}

export default Post