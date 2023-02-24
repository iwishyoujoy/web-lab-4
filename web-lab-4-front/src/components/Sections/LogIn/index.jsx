import "./index.scoped.css";
import AppContainer from "../../AppContainer";
import {useNavigate} from "react-router-dom";

function LogIn() {
    const navigate = useNavigate();

    function logInRequest(){
        let login = document.getElementById("login").innerHTML;
        let password = document.getElementById("password").innerHTML;

        if (login === null || login === ""){
            console.log("Login can't be empty");
        }
        if (password === null || password === ""){
            console.log("Password can't be empty");
        }
    //     TODO прописать допустимую длину пароля и логина

        fetch("/api/login", {headers: {"Authorization": "Basic " + btoa(login + ":" + password)}}).then(response => {
            if (response.ok){
                console.log("успех")
                navigate("/mainpage");
            }
            else{
                console.log("ты дурак");
            }
        })
     }

    function signUpRequest(){
        console.log("привет");
    }
    return (
        <AppContainer>
            <div id="login-container">
                <div className="big-text">
                    Log In/Sign Up
                </div>
                <div id="login-small-text" className="small-text">
                    Enter your login and password
                </div>
                <form id="login-password-form">
                    <span className="popup" id="error-popup"></span>
                    <div id="input-container">
                        <input className="input-text" type="text" placeholder="Login" id="login"/>
                        <input className="input-text" type="text" placeholder="Password" id="password"/>
                    </div>
                </form>
                <div id="choice-container">
                    <button className="pointer button" id="login-button" onClick={logInRequest}>Log In</button>
                    <button className="pointer button" id="signup-button" onClick={signUpRequest}>Sign Up</button>
                </div>
            </div>
        </AppContainer>
    );
}
export default LogIn;