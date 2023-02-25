import Author from "../../components/Sections/Author";
import AppBody from "../../components/AppBody";
import Header from "../../components/Sections/Header";
import Footer from "../../components/Sections/Footer";
import Input from "../../components/Sections/Input";
import {Toaster} from "react-hot-toast";

function MainPage() {

    const headerNavigation = [
        {title: "Portfolio", link: "https://iwishyoujoy.ru/"},
        {title: "Github", link: "https://github.com/iwishyoujoy"},
        {title: "Log out", link: "/"}
    ];

    return (
        <AppBody>
            <Author />
            <Header navigation={headerNavigation} />
            <Input />
            <Footer />
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </AppBody>
    );

}

export default MainPage;