import AppContainer  from "../../AppContainer";

import "./index.scoped.css";

function Error404(){
    return (
        <AppContainer>
            <div id="error-404" className="error">
                <div className="error-text">
                    <div className="error-number">404</div>
                    <div id="error-big-text" className="big-text">
                        Something was wrong, seems that this page doesn't exist
                    </div>
                    <div className="small-text">Click on navigation to go to an existing page!</div>
                </div>
            </div>
        </AppContainer>
    );
}

export default Error404;