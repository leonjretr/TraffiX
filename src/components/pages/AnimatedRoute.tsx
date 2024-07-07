import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import FriendsPage from "./FriendsPage.tsx";
import TasksPage from "./TasksPage.tsx";
import TopPage from "./TopPage.tsx";
import ShopPage from "./ShopPage.tsx";
import {AnimatePresence} from "framer-motion";
import {useEffect, useState} from "react";
import WelcomingPage1 from "./WelcomingPage1.tsx";
import MainPage from "./MainPage.tsx";
import WelcomingPage2 from "./WelcomingPage2.tsx";
import WelcomingPage3 from "./WelcomingPage3.tsx";

const AnimatedRoute = () => {

    const navigate = useNavigate();
    let location = useLocation();

    const [isSwipedRight, setSwipedRight] = useState<boolean>(false);
    const [isSwipedLeft, setSwipedLeft] = useState<boolean>(false);

    useEffect(() => {
        let startTouchX: number = 0;
        let endTouchX: number = 0;
        document.addEventListener("touchstart", (event) => {
            startTouchX = event.changedTouches[0].pageX;
            //console.log(startTouchX);
        })
        document.addEventListener("touchend", (event) => {
            endTouchX = event.changedTouches[0].pageX;
            //console.log(endTouchX);
            if (endTouchX > startTouchX) {
                setSwipedRight(true)
            }
            if (startTouchX > endTouchX) {
                setSwipedLeft(true)
            }
            if (isSwipedRight) {
                switch (location.pathname) {
                    case '../':
                        navigate("../tasks", {replace: true})
                        break;
                    case '../tasks':
                        navigate("../shop", {replace: true})
                        break;
                    case '../shop':
                        break;
                    case '../top':
                        navigate("../friends", {replace: true})
                        break;
                    case '../friends':
                        navigate("../tap", {replace: true})
                        break;
                }
            }
            if (isSwipedLeft) {
                switch (location.pathname) {
                    case '../':
                        navigate("../friends", {replace: true})
                        break;
                    case '../friends':
                        navigate("../top", {replace: true})
                        break;
                    case '../top':
                        break;
                    case '../shop':
                        navigate("../tasks", {replace: true})
                        break;
                    case '../tasks':
                        navigate("../", {replace: true})
                        break;
                }
            }
        })
    }, [])

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/main" element={<MainPage/>}/>
                <Route path="/friends" element={<FriendsPage/>}/>
                <Route path="/top" element={<TopPage/>}/>
                <Route path="/tasks" element={<TasksPage/>}/>
                <Route path="/shop" element={<ShopPage/>}/>
                <Route path={"/"} element={<WelcomingPage1/>}/>
                <Route path={"/guide2"} element={<WelcomingPage2/>}/>
                <Route path={"/guide3"} element={<WelcomingPage3/>}/>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoute;