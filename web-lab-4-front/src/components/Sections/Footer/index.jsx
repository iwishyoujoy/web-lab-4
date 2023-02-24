import AppContainer  from "../../AppContainer";

import "./index.scoped.css";
import picture from "../../../itmo-light.png";

function Footer(){
    return (
        <AppContainer>
            <footer>
                <img id="itmo-logo" alt="ITMO logo" src={picture}/>
            </footer>
        </AppContainer>
    );
}

export default Footer;