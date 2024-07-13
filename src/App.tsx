import {BrowserRouter as Router} from "react-router-dom";
import AnimatedRoute from "./components/router/AnimatedRoute.tsx";

const App = () => {

    return (
        <div className="App bg-bgNew min-h-screen">
            <Router>
                <AnimatedRoute/>
            </Router>
        </div>
    );
};

export default App;
