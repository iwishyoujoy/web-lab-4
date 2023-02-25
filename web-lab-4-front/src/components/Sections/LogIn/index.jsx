import "./index.scoped.css";
import AppContainer from "../../AppContainer";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import toast from "react-hot-toast";

function LogIn() {
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const EMPTY_LOGIN_ERROR = "Login can't be empty";
    const EMPTY_PASSWORD_ERROR = "Password can't be empty";
    const CONFLICT_ERROR = "Login has been already taken";
    const UNAUTHORIZED_ERROR = "Invalid login/password";
    const BAD_REQUEST_ERROR = "Invalid log in request";
    const UNKNOWN_ERROR = "Unknown error";

    function getToast(message){
        toast(message, {
            style: {
                borderRadius: '10px',
                color: 'rgb(4, 30, 55)',
                background: 'rgb(255, 255, 255, 80%)'
            }
        })
    }

    function validateData(){
        if (login === ""){
            getToast(EMPTY_LOGIN_ERROR);
            return false;
        }
        else if (password === ""){
            getToast(EMPTY_PASSWORD_ERROR);
            return false;
        }
        else{
            return true;
        }
    }

    function checkResponse(response){
        if (response.ok){
            return true;
        }
        else{
            if (response.statusText === 'Conflict'){
                getToast(CONFLICT_ERROR);
            }
            else if(response.statusText === 'Unauthorized'){
                getToast(UNAUTHORIZED_ERROR);
            }
            else if(response.statusText === 'Bad Request'){
                getToast(BAD_REQUEST_ERROR);
            }
            else{
                getToast(UNKNOWN_ERROR);
            }
            return false;
        }
    }

    function logInRequest(){
        if (validateData()){
            fetch("/api/login", {method: 'POST', headers: {"Authorization": "Basic " + btoa(login + ":" + password).replace("=", "")}}).then(response => {
                if (checkResponse(response)){
                    navigate('/mainpage');
                }
            })
        }
     }

    function signUpRequest(){
        if (validateData()){
            let formData = new FormData();
            formData.append('login', login);
            formData.append('password', password);
            fetch("/api/register",{
                method: 'POST',
                body: formData
            }).then(response => {
                if (checkResponse(response)){
                    navigate("/mainpage");
                }
            })
        }
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
                        <input className="input-text" type="text" placeholder="Login" id="login" value={login} onChange={e => setLogin(e.target.value)}/>
                        <input className="input-text" type="password" placeholder="Password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
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