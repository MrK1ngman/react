import { useEffect, useState } from "react"

function Deteails({ info }) {
    const [currentUser, setCurrentUser] = useState();
    

    useEffect(() => {
        fetch(process.env.REACT_APP_USERS + `/${info.id}.json`)
            .then(response => response.json())
            .then(data => setCurrentUser(data));
    }, [info.id])



    return (
        <>
            {currentUser && 
                <div className="details">
                <img src={`${currentUser.avatar}?${Math.random()}`} alt="avatar"/>
                <h2>{currentUser.name}</h2>
                <h3>City: {currentUser.details.city}</h3>
                <h3>Company: {currentUser.details.company}</h3>
                <h3>Position: {currentUser.details.position}</h3>
                </div>
            }
        </>
        
    )
}

export default Deteails