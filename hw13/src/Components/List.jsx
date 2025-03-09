function List({ users, handlerUser, activeUser }) {
    const usersList = users;

    return (
        <div className="toolbar">
            <ul className="list">
                {usersList && usersList.map(user => 
                    <li 
                        key={user.id} 
                        id={user.id}
                        onClick={() => handlerUser(user.id, user.name)}
                        className="user"
                        style={activeUser && {backgroundColor: user.id === activeUser.id ? 'rgb(0, 119, 255)' : 'white', color: user.id === activeUser.id ? 'white' : 'black'}}
                    >
                        {user.name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default List