import Author from "../../components/Sections/Author";
import AppBody from "../../components/AppBody";
import Header from "../../components/Sections/Header";
import Footer from "../../components/Sections/Footer";
import Input from "../../components/Sections/Input";

function MainPage() {

    const headerNavigation = [
        {title: "Portfolio", link: "https://iwishyoujoy.ru/", key:"portfolio"},
        {title: "Github", link: "https://github.com/iwishyoujoy", key: "github"},
        {title: "Log out", link: "/", key: "home"}
    ];

    return (
        <AppBody>
            <Author />
            <Header navigation={headerNavigation} />
            <Input />
            <Footer />
        </AppBody>
    );

}

export default MainPage;