import Streams from "./Streams/Streams"
import Programs from "./TV-program/Programs"
import Weather from "./Weather"

function Widgets() {
    return (
        <div className="widgets">
            <Weather 
                img={'https://cdn-icons-png.flaticon.com/512/8646/8646881.png'} 
                temperature={'+17'}/>
            <Programs/>
            <Streams/>
        </div>
        
    )
}

export default Widgets