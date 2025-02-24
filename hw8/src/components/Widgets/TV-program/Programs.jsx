import Program from "./Program"

function Programs() {
    return (
        <div className="programs">
            <h2 className="programs-title">Телепрограмма</h2>
            <ul className="programList">
                <Program 
                    time={'02:00'}
                    nameChannel={'Губка боб'}
                    channel={"ТНТ"}
                />
                <Program 
                    time={'02:10'}
                    nameChannel={'Котопес'}
                    channel={"ТНТ"}
                />
                <Program 
                    time={'03:00'}
                    nameChannel={'Буба'}
                    channel={"Карусель"}
                />
            </ul>
        </div>
        
        
    )
}

export default Programs