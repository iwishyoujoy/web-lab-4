import "./index.scoped.css";
import AppContainer from "../../AppContainer";
import {ReactComponent as Graph} from "../Graph/graph.svg";

function Input() {



    return (
        <AppContainer>
            <div id="main-container">
                <div id="data-container">
                    <form id="form">
                        <div id="X">
                            Choose X:
                            <div className="X-values">
                                <div id="X-first-row">
                                    <div className="one-radio-container">
                                        <input type="radio" className="pointer radio-button" id="x-5"></input>
                                        <label className="radio-label" htmlFor="x-5">-5</label>
                                    </div>
                                    <div className="one-radio-container">
                                        <input type="radio" className="pointer radio-button" id="x-4"></input>
                                        <label className="radio-label" htmlFor="x-4">-4</label>
                                    </div>
                                    <div className="one-radio-container">
                                        <input type="radio" className="pointer radio-button" id="x-3"></input>
                                        <label className="radio-label" htmlFor="x-3">-3</label>
                                    </div>
                                </div>
                                <div id="X-second-row">
                                    <div className="one-radio-container">
                                        <input type="radio" className="pointer radio-button" id="x-2"></input>
                                        <label className="radio-label" htmlFor="x-2">-2</label>
                                    </div>
                                    <div className="one-radio-container">
                                        <input type="radio" className="pointer radio-button" id="x-1"></input>
                                        <label className="radio-label" htmlFor="x-1">-1</label>
                                    </div>
                                    <div className="one-radio-container">
                                        <input type="radio" className="pointer radio-button" id="x0"></input>
                                        <label className="radio-label" htmlFor="x0">0</label>
                                    </div>
                                </div>
                                <div id="X-third-row">
                                    <div className="one-radio-container">
                                        <input type="radio" className="pointer radio-button" id="x1"></input>
                                        <label className="radio-label" htmlFor="x1">1</label>
                                    </div>
                                    <div className="one-radio-container">
                                        <input type="radio" className="pointer radio-button" id="x2"></input>
                                        <label className="radio-label" htmlFor="x2">2</label>
                                    </div>
                                    <div className="one-radio-container">
                                        <input type="radio" className="pointer radio-button" id="x3"></input>
                                        <label className="radio-label" htmlFor="x3">3</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="Y">
                            Enter Y (-3; 3):
                            <br/>
                            <input className="pointer" type="number" id="Y-value"/>
                        </div>
                        <div id="R">
                            Choose R:
                            <div className="R-values">
                                <div id="R-first-row">
                                    <div className="one-radio-container">
                                        <input type="radio" className="pointer radio-button" id="r-5"></input>
                                        <label htmlFor="r-5">-5</label>
                                    </div>
                                    <div className="one-radio-container">
                                        <input type="radio" className="pointer radio-button" id="r-4"></input>
                                        <label htmlFor="r-4">-4</label>
                                    </div>
                                    <div className="one-radio-container">
                                        <input type="radio" className="pointer radio-button" id="r-3"></input>
                                        <label htmlFor="r-3">-3</label>
                                    </div>
                                </div>
                                <div id="R-second-row">
                                    <div className="one-radio-container">
                                        <input type="radio" className="pointer radio-button" id="r-2"></input>
                                        <label htmlFor="r-2">-2</label>
                                    </div>
                                    <div className="one-radio-container">
                                        <input type="radio" className="pointer radio-button" id="r-1"></input>
                                        <label htmlFor="r-1">-1</label>
                                    </div>
                                    <div className="one-radio-container">
                                        <input type="radio" className="pointer radio-button" id="r0"></input>
                                        <label htmlFor="r0">0</label>
                                    </div>
                                </div>
                                <div id="R-third-row">
                                    <div className="one-radio-container">
                                        <input type="radio" className="pointer radio-button" id="r1"></input>
                                        <label htmlFor="r1">1</label>
                                    </div>
                                    <div className="one-radio-container">
                                        <input type="radio" className="pointer radio-button" id="r2"></input>
                                        <label htmlFor="r2">2</label>
                                    </div>
                                    <div className="one-radio-container">
                                        <input type="radio" className="pointer radio-button" id="r3"></input>
                                        <label htmlFor="r3">3</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div id="graph-container">
                    <form id="graph-form">
                        <Graph />
                    </form>
                </div>
                <div id="button-container">
                    <button className="pointer button" id="check-button">Check</button>
                    <button className="pointer button" id="clear-button">Clear</button>
                </div>
                <div id="table-container">
                    <table id="results">
                        <tr>
                            <th>X</th>
                            <th>Y</th>
                            <th>R</th>
                            <th>Current time</th>
                            <th>Script time</th>
                            <th>Result</th>
                        </tr>
                    </table>
                </div>
            </div>
        </AppContainer>
    );
}
export default Input;
