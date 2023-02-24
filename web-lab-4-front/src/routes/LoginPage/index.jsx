import Author from "../../components/Sections/Author";
import AppBody from "../../components/AppBody";
import HeaderLogin from "../../components/Sections/Header";
import Footer from "../../components/Sections/Footer";
import LogIn from "../../components/Sections/LogIn";

function MainPage() {

    const headerNavigation = [
        {title: "Portfolio", link: "https://iwishyoujoy.ru/", key:"portfolio"},
        {title: "Github", link: "https://github.com/iwishyoujoy", key:"github"}
    ];


    return (
        <AppBody>
            <Author />
            <HeaderLogin navigation={headerNavigation} />
            <LogIn />
            <Footer />
        </AppBody>
    );

}

export default MainPage;
