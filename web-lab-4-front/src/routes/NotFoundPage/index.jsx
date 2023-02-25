import Author from "../../components/Sections/Author";
import AppBody from "../../components/AppBody";
import HeaderLogin from "../../components/Sections/Header";
import Footer from "../../components/Sections/Footer";
import Error404 from "../../components/Sections/Error404";

function MainPage() {

    const headerNavigation = [
        {title: "Portfolio", link: "https://iwishyoujoy.ru/"},
        {title: "Github", link: "https://github.com/iwishyoujoy"},
        {title: "Log in", link: "/"}
    ];


    return (
        <AppBody>
            <Author />
            <HeaderLogin navigation={headerNavigation} />
            <Error404 />
            <Footer />
        </AppBody>
    );

}

export default MainPage;
