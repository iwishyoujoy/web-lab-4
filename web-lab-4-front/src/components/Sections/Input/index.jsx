import "./index.scoped.css";
import AppContainer from "../../AppContainer";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import Graph from "../Graph";
import store from "../../../store";
import {useNavigate} from "react-router-dom";

function Input() {

    useEffect(() => {
        checkAuth();
        sendShowRequest();
    }, []);

    function popupMessage(message){
        toast(message, {
            style: {
                borderRadius: '10px',
                color: 'rgb(4, 30, 55)',
                background: 'rgb(255, 255, 255, 50%)'
            }
        })
    }
    const [xValue, setX] = useState("-5");
    const [yValue, setY] = useState("0");
    const [rValue, setR] = useState("2");
    const [dotData, setDotData] = useState([]);

    const navigate = useNavigate();

    const NEGATIVE_R_ERROR = "Radius can't be less than 1!";
    const INVALID_Y_ERROR = "Y is out of range!";

    function checkAuth(){
        if (store.getState().login.value == null || store.getState().password.value == null){
            navigate("/");
        }
    }

    const selectX = (e) => {
        setX(e.target.value);
    }
    const selectY = (e) => {
        if (validateY(e.target.value)){
            setY(e.target.value);
        }
        else{
            popupMessage(INVALID_Y_ERROR);
        }
    }
    const selectR = (e) => {
        if (validateR(e.target.value)){
            setR(e.target.value);
        }
        else{
            popupMessage(NEGATIVE_R_ERROR);
        }
    }

    function validateR(r){
        return r > 0;
    }
    function validateY(y){
        return y > -3 && y < 3;
    }

    function sendShowRequest(){
        (async () => {
            let response = await fetch("/api/dots", {
                method: "GET",
                headers: {"Authorization": "Basic " + btoa(store.getState().login.value + ":" + store.getState().password.value).replace("=", "")}
            })
            let data = await response.json();
            if (response.ok) setDotData(data);
        })()
    }

    function sendCheckRequest(){
        let dotFormData = new FormData();
        dotFormData.append('x', parseFloat(xValue));
        dotFormData.append('y', parseFloat(yValue));
        dotFormData.append('r', parseFloat(rValue));
        (async () => {
            let response = await fetch("/api/dots", {
                method: "POST",
                headers: {"Authorization": "Basic " + btoa(store.getState().login.value + ":" + store.getState().password.value).replace("=", "")},
                body: dotFormData
            })
            let data = await response.json();
            if (response.ok) setDotData([...dotData, data]);
        })()
    }

    function sendDeleteRequest(){
        (async () => {
            let response = await fetch("/api/dots", {
                method: "DELETE",
                headers: {"Authorization": "Basic " + btoa(store.getState().login.value + ":" + store.getState().password.value).replace("=", "")}
            })
            if (response.ok) setDotData([]);
        })()
    }

    function parseNumber(number){
        if (number < 10) return ("0" + number);
        return number;
    }

    function parseCurrentTime(timeStamp){
        let dateFormat = new Date(timeStamp*1000);
        return (parseNumber(dateFormat.getDate()) + "/" + parseNumber((dateFormat.getMonth()+1)) + "/" + dateFormat.getFullYear() + " "
            + parseNumber(dateFormat.getHours()) + ":" + parseNumber(dateFormat.getMinutes()) + ":" + parseNumber(dateFormat.getSeconds()));
    }

    function parseScriptTime(scriptTime){
        return scriptTime/1000;
    }

    function sendCoordsFromClick(x,y){
        setX(x);
        setY(y);
        sendCheckRequest();
    }
    return (
        <AppContainer>
            <div id="main-container">
                <div id="data-container">
                    <div id="X">
                        Choose X:
                        <div className="X-values">
                            <div id="X-first-row">
                                <div className="one-radio-container">
                                    <input type="radio" className="pointer radio-button" id="x-5" value="-5"
                                           onChange={selectX} checked={xValue === ("-5")}></input>
                                    <label className="radio-label" htmlFor="x-5">-5</label>
                                </div>
                                <div className="one-radio-container">
                                    <input type="radio" className="pointer radio-button" id="x-4" value="-4"
                                           onChange={selectX} checked={xValue === ("-4")}></input>
                                    <label className="radio-label" htmlFor="x-4">-4</label>
                                </div>
                                <div className="one-radio-container">
                                    <input type="radio" className="pointer radio-button" id="x-3" value="-3"
                                        onChange={selectX} checked={xValue === ("-3")}></input>
                                    <label className="radio-label" htmlFor="x-3">-3</label>
                                </div>
                            </div>
                            <div id="X-second-row">
                                <div className="one-radio-container">
                                    <input type="radio" className="pointer radio-button" id="x-2" value="-2"
                                           onChange={selectX} checked={xValue === ("-2")}></input>
                                    <label className="radio-label" htmlFor="x-2">-2</label>
                                </div>
                                <div className="one-radio-container">
                                    <input type="radio" className="pointer radio-button" id="x-1" value="-1"
                                           onChange={selectX} checked={xValue === ("-1")}></input>
                                    <label className="radio-label" htmlFor="x-1">-1</label>
                                </div>
                                <div className="one-radio-container">
                                    <input type="radio" className="pointer radio-button" id="x0" value="0"
                                           onChange={selectX} checked={xValue === ("0")}></input>
                                    <label className="radio-label" htmlFor="x0">0</label>
                                </div>
                            </div>
                            <div id="X-third-row">
                                <div className="one-radio-container">
                                    <input type="radio" className="pointer radio-button" id="x1" value="1"
                                           onChange={selectX} checked={xValue === ("1")}></input>
                                    <label className="radio-label" htmlFor="x1">1</label>
                                </div>
                                <div className="one-radio-container">
                                    <input type="radio" className="pointer radio-button" id="x2"  value="2"
                                           onChange={selectX} checked={xValue === ("2")}></input>
                                    <label className="radio-label" htmlFor="x2">2</label>
                                </div>
                                <div className="one-radio-container">
                                    <input type="radio" className="pointer radio-button" id="x3" value="3"
                                           onChange={selectX} checked={xValue === ("3")}></input>
                                    <label className="radio-label" htmlFor="x3">3</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Y">
                        Enter Y (-3; 3):
                        <br/>
                        <input className="pointer" type="number" id="Y-value" value={yValue} onInput={selectY}/>
                    </div>
                    <div id="R">
                        Choose R:
                        <div className="R-values">
                            <div id="R-first-row">
                                <div className="one-radio-container">
                                    <input type="radio" className="pointer radio-button" id="r-5" value="-5"
                                           onChange={selectR} checked={false}></input>
                                    <label htmlFor="r-5">-5</label>
                                </div>
                                <div className="one-radio-container">
                                    <input type="radio" className="pointer radio-button" id="r-4" value="-4"
                                           onChange={selectR} checked={false}></input>
                                    <label htmlFor="r-4">-4</label>
                                </div>
                                <div className="one-radio-container">
                                    <input type="radio" className="pointer radio-button" id="r-3" value="-3"
                                           onChange={selectR} checked={false}></input>
                                    <label htmlFor="r-3">-3</label>
                                </div>
                            </div>
                            <div id="R-second-row">
                                <div className="one-radio-container">
                                    <input type="radio" className="pointer radio-button" id="r-2" value="-2"
                                           onChange={selectR} checked={false}></input>
                                    <label htmlFor="r-2">-2</label>
                                </div>
                                <div className="one-radio-container">
                                    <input type="radio" className="pointer radio-button" id="r-1" value="-1"
                                           onChange={selectR} checked={false}></input>
                                    <label htmlFor="r-1">-1</label>
                                </div>
                                <div className="one-radio-container">
                                    <input type="radio" className="pointer radio-button" id="r0" value="0"
                                           onChange={selectR} checked={false}></input>
                                    <label htmlFor="r0">0</label>
                                </div>
                            </div>
                            <div id="R-third-row">
                                <div className="one-radio-container">
                                    <input type="radio" className="pointer radio-button" id="r1" value="1"
                                           onChange={selectR} checked={rValue === ("1")}></input>
                                    <label htmlFor="r1">1</label>
                                </div>
                                <div className="one-radio-container">
                                    <input type="radio" className="pointer radio-button" id="r2" value="2"
                                           onChange={selectR} checked={rValue === ("2")}></input>
                                    <label htmlFor="r2">2</label>
                                </div>
                                <div className="one-radio-container">
                                    <input type="radio" className="pointer radio-button" id="r3" value="3"
                                           onChange={selectR} checked={rValue === ("3")}></input>
                                    <label htmlFor="r3">3</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="graph-container">
                    <Graph radius={rValue} dots={dotData} setAndSendCoords={sendCoordsFromClick}/>
                </div>
                <div id="button-container">
                    <button className="pointer button" id="check-button" onClick={sendCheckRequest}>Check</button>
                    <button className="pointer button" id="clear-button" onClick={sendDeleteRequest}>Clear</button>
                </div>
                <div id="table-container">
                    <table id="results">
                        <thead><tr>
                            <th>X</th>
                            <th>Y</th>
                            <th>R</th>
                            <th>Current time</th>
                            <th>Script time</th>
                            <th>Result</th>
                        </tr></thead>
                        <tbody>
                        {dotData && dotData.map(
                            (dot, i) => (
                                <tr key={i}>
                                    <td>{dot.x}</td>
                                    <td>{dot.y}</td>
                                    <td>{dot.r}</td>
                                    <td>{parseCurrentTime(dot.timestamp)}</td>
                                    <td>{parseScriptTime(dot.scriptTime)}</td>
                                    <td>{dot.status ? "hit" : "miss"}</td>
                                </tr>
                            )
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppContainer>
    );
}
export default Input;
