import AppContainer  from "../../AppContainer";

function Graph(props){
    function updateTriangle(r){
        return ("150,150 " + String(150-50*r) + ",150 150," + String(150+25*r));
    }

    function updateRectangle(r){
        return (String(150-25*r) + ",150 150,150 150," + String(150-50*r) + " " + String(150-25*r) + "," + String(150-50*r));
    }

    function updateCircle(r){
        return ("M" + String(150+50*r) + ",150 A" + String(50*r) + "," + String(50*r) + " 90 0,1 150," + String(150+50*r) + " L 150,150 Z");
    }

    return (
        <AppContainer>
            <svg id="graph" className="pointer" xmlns="http://www.w3.org/2000/svg" width="303px" height="300px">
                {/*Треугольник в третьей четверти*/}
                <polygon id="triangle" points={updateTriangle(props.radius)}></polygon>

                {/*Прямоугольник во второй четверти*/}
                <polygon id="rectangle" points={updateRectangle(props.radius)}></polygon>

                {/*Четверть круга в четвертой четверти*/}
                <path id="circle" d={updateCircle(props.radius)}></path>

                {/*Координатные оси*/}
                <line x1="0" x2="300" y1="150" y2="150" stroke="#041e37"></line>
                <line x1="150" x2="150" y1="0" y2="300" stroke="#041e37"></line>

                {/*Стрелки*/}
                <polygon id="arrow" points="150,0 145,10 155,10" stroke="#041e37"></polygon>
                <polygon id="arrow" points="300,150 290,145 290,155" stroke="#041e37"></polygon>

                {/*Метки для значений R на оси X*/}
                <line x1="25" x2="25" y1="145" y2="155" stroke="#041e37"></line>
                <line x1="50" x2="50" y1="145" y2="155" stroke="#041e37"></line>
                <line x1="75" x2="75" y1="145" y2="155" stroke="#041e37"></line>
                <line x1="100" x2="100" y1="145" y2="155" stroke="#041e37"></line>
                <line x1="125" x2="125" y1="145" y2="155" stroke="#041e37"></line>
                <line x1="175" x2="175" y1="145" y2="155" stroke="#041e37"></line>
                <line x1="200" x2="200" y1="145" y2="155" stroke="#041e37"></line>
                <line x1="225" x2="225" y1="145" y2="155" stroke="#041e37"></line>
                <line x1="250" x2="250" y1="145" y2="155" stroke="#041e37"></line>
                <line x1="275" x2="275" y1="145" y2="155" stroke="#041e37"></line>

                {/*Метки для значений R на оси Y*/}
                <line x1="145" x2="155" y1="25" y2="25" stroke="#041e37"></line>
                <line x1="145" x2="155" y1="50" y2="50" stroke="#041e37"></line>
                <line x1="145" x2="155" y1="75" y2="75" stroke="#041e37"></line>
                <line x1="145" x2="155" y1="100" y2="100" stroke="#041e37"></line>
                <line x1="145" x2="155" y1="125" y2="125" stroke="#041e37"></line>
                <line x1="145" x2="155" y1="175" y2="175" stroke="#041e37"></line>
                <line x1="145" x2="155" y1="200" y2="200" stroke="#041e37"></line>
                <line x1="145" x2="155" y1="225" y2="225" stroke="#041e37"></line>
                <line x1="145" x2="155" y1="250" y2="250" stroke="#041e37"></line>
                <line x1="145" x2="155" y1="275" y2="275" stroke="#041e37"></line>

                {/*Подписи к осям*/}
                <text x="290" y="140">X</text>
                <text x="155" y="10">Y</text>

                {/*Значения R на оси X*/}
                <text x="40" y="138">-2</text>
                <text x="92" y="138">-1</text>
                <text x="195" y="138">1</text>
                <text x="245" y="138">2</text>

                {/*Значения R на оси Y*/}
                <text x="162" y="57">2</text>
                <text x="162" y="107">1</text>
                <text x="162" y="207">-1</text>
                <text x="162" y="257">-2</text>


                <circle id="dot" cx="150" cy="150" r="3" fill="#132a42" stroke="#132a42"></circle>
                <circle id="cursor" cx="150" cy="150" r="3" fill="#fafafa" stroke="#132a42"></circle>

            </svg>
        </AppContainer>
    );
}

export default Graph;