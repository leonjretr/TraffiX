import {BrowserRouter as Router} from "react-router-dom";
import AnimatedRoute from "./components/pages/AnimatedRoute.tsx";

const App = () => {

    return (
        <div className="App bg-main h-screen min-h-screen">
            <Router>
                <AnimatedRoute/>
            </Router>
        </div>
    );
};

export default App;
