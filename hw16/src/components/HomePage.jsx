import { useState, useEffect } from "react"
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";

function HomePage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch('http://localhost:7070/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                setLoading(false)
            });
    }, [loading])
    
    return(
        <>
            {posts && 
                <div className="posts">
                    {posts.map(post => 
                        <Link to={`/posts/${post.id}`} key={post.id} className="postLink">
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
                            </div>
                        </Link>
                    )}
                </div>
            }
            {loading &&
                <img className="loading" src="https://i.gifer.com/VAyR.gif"/>
            }
        </>
    )
}

export default HomePage