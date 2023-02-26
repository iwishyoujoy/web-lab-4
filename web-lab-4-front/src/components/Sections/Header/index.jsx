import "./index.scoped.css";
import AppContainer from "../../AppContainer";
import {useDispatch} from "react-redux";
import {resetLogin} from "../../../redux/login";
import {resetPassword} from "../../../redux/password";

function Header(props) {
    const dispatch = useDispatch();

    function checkIfLogOut(title){
        if (title === "Log out"){
            dispatch(resetLogin);
            dispatch(resetPassword);
        }
        return title;
    }
    return (
            <AppContainer>
                <nav className="menu">
                    {props.navigation.map(
                        (item, key) => (
                            <a key={key} className="pointer link" href={item.link}>{checkIfLogOut(item.title)}</a>
                        )
                    )}
                </nav>
            </AppContainer>
    );
}
export default Header;
