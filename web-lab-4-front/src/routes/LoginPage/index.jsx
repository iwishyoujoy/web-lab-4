import Author from "../../components/Sections/Author";
import AppBody from "../../components/AppBody";
import HeaderLogin from "../../components/Sections/Header";
import Footer from "../../components/Sections/Footer";
import LogIn from "../../components/Sections/LogIn";
import {Toaster} from "react-hot-toast";

function LoginPage() {

    const headerNavigation = [
        {title: "Portfolio", link: "https://iwishyoujoy.ru/"},
        {title: "Github", link: "https://github.com/iwishyoujoy"}
    ];


    return (
        <AppBody>
            <Author />
            <HeaderLogin navigation={headerNavigation} />
            <LogIn />
            <Footer />
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </AppBody>
    );

}

export default LoginPage;
