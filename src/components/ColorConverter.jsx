import {useState} from 'react';

function ColorConverter() {
    const [color, setColor] = useState("#FFFFFF");
    let rgb = color;
    let style = {backgroundColor: color};

    // function changeColor(event) {
    //     setColor(event.target.value);
    // }

    const regex = new RegExp("^#([a-fA-F\\d]{2})([a-fA-F\\d]{2})([a-fA-F\\d]{2})$");

    if (color.length >= 7) {
        if (regex.test(color))  //введен корректный код цвета
        {
            //перевод шестнадцатеричного цвета в десятичный вид
            const bigint = parseInt(color.split('#')[1], 16),
                r = (bigint >> 16) & 255,
                g = (bigint >> 8) & 255,
                b = bigint & 255;
            rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
        } else {
            rgb = "Ошибка, цвет задан неверно!";
        }
    } else {
        rgb = "Введите цвет";
    }
    
    return (
        <div className="container" style={style}>
            <form className="form">
                <input type="text"
                       name="color"
                       value={color}
                       onChange={(event) => setColor(event.target.value)}/>
                <br/>
                <span className="rgb">{rgb}</span>
            </form>

        </div>
    );
}

export default ColorConverter;