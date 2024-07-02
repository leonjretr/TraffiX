import Header from "./components/header/Header.tsx";
import MainPageBody from "./components/pages/MainPageBody.tsx";
import Footer from "./components/footer/Footer.tsx";

const App = () => (
  <div className="App bg-main h-screen">
    <div className="Header">
      <Header />
    </div>
    <div className="MainPageBody">
      <MainPageBody />
    </div>
    <div className="Footer">
      <Footer />
    </div>
  </div>
);

export default App;
