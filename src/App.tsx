import Header from "./components/header/Header.tsx";
import MainPageBody from "./components/main-page/MainPageBody.tsx";
import Footer from "./components/footer/Footer.tsx";

const App = () => {
    return (
        <div className="App bg-main">
            <div className={"Header"}>
                <Header/>
            </div>
            <div className={"MainPageBody"}>
                <MainPageBody/>
            </div>
            <div className={"Footer"}>
                <Footer/>
            </div>
        </div>
    );
};

export default App;