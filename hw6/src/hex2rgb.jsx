import { useState } from 'react';

function Hex2rgb() {
    const [color, setColor] = useState('');

    const handleNameChange = ({target}) => {
        if(target.value.length == 7) {
            const validator = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(target.value);
            if(validator) {
                const rgb = `${parseInt(validator[1], 16)}, ${parseInt(validator[2], 16)}, ${parseInt(validator[3], 16)}`;
                setColor(`rgb(${rgb})`);
            } else {
                setColor('Ошибка');
            }
        }
    }

    return (
        <div className='wall' style={{backgroundColor: color}}>
            <div className="hex2rgb">
                <form>
                    <input 
                        id="hexColor" name="hexColor"
                        maxLength='7' placeholder='Введите код'
                        type="text" onChange={handleNameChange}/>
                </form>
                <div className="rgbColor">{color}</div>
            </div>
        </div>
        
    )
}

export default Hex2rgb;