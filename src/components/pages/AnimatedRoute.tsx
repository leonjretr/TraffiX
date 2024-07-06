import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import FriendsPage from "./FriendsPage.tsx";
import TasksPage from "./TasksPage.tsx";
import TopPage from "./TopPage.tsx";
import ShopPage from "./ShopPage.tsx";
import {AnimatePresence} from "framer-motion";
import MainPage from "./MainPage.tsx";
import {useEffect, useState} from "react";

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
                    case '/':
                        navigate("/tasks")
                        break;
                    case '/tasks':
                        navigate("/shop")
                        break;
                    case '/shop':
                        break;
                    case '/top':
                        navigate("/friends")
                        break;
                    case '/friends':
                        navigate("/tap")
                        break;
                }
            }
            if (isSwipedLeft) {
                switch (location.pathname) {
                    case '/':
                        navigate("/friends")
                        break;
                    case '/friends':
                        navigate("/top")
                        break;
                    case '/top':
                        break;
                    case '/shop':
                        navigate("/tasks")
                        break;
                    case '/tasks':
                        navigate("/")
                        break;
                }
            }
        })
    }, [])

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/friends" element={<FriendsPage/>}/>
                <Route path="/top" element={<TopPage/>}/>
                <Route path="/tasks" element={<TasksPage/>}/>
                <Route path="/shop" element={<ShopPage/>}/>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoute;