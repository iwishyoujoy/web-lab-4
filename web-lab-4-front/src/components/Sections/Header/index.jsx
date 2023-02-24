import "./index.scoped.css";
import AppContainer from "../../AppContainer";

function Header(props) {
    return (
            <AppContainer>
                <nav className="menu">
                    {props.navigation.map(
                        (item) => (
                            <a className="pointer link" href={item.link}>{item.title}</a>
                        )
                    )}
                </nav>
            </AppContainer>
    );
}
export default Header;
