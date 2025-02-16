import Star from "./Star";

function Stars(props) {
    // eslint-disable-next-line react/prop-types
    const { count } = props;
    
    const StarArr = [];

    for(let i = 0; i < count; i++) {
        StarArr.push(<Star/>)
    }

    if(count < 1 || count > 5 || typeof count !== 'number') {
        return;
    }

    return (
        <ul className="card-body-stars u-clearfix">
          {StarArr.map((item, index) => 
            <li key={index}>
                {item}
            </li>     
          )}
        </ul>
    )
}

export default Stars;