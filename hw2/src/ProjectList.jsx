function ProjectList({ projects }) {
    let i = 0;
    return (
        <div className="projects">
            {
                projects.map(item =>
                    <div key = {i++}>
                        <img src={item.img}/>
                    </div>
                )
            }
        </div>
    )
}

export default ProjectList;