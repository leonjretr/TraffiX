import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import FriendsPage from "../pages/FriendsPage.tsx";
import TopPage from "../pages/TopPage.tsx";
import ShopPage from "../pages/ShopPage.tsx";
import {AnimatePresence} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import WelcomingPage1 from "../pages/WelcomingPage1.tsx";
import WelcomingPage2 from "../pages/WelcomingPage2.tsx";
import WelcomingPage3 from "../pages/WelcomingPage3.tsx";
import MainPageNew from "../pages/MainPageNew.tsx";
import TasksPageNew from "../pages/TasksPageNew.tsx";

const AnimatedRoute = () => {

    const navigate = useNavigate();
    let location = useLocation();
    const [swiping, setSwiping] = useState<boolean>(false);
    const touchInProgress = useRef<boolean>(false); // To keep track of ongoing touch

    useEffect(() => {
        let startTouchX: number = 0;
        let endTouchX: number = 0;
        const threshold = 85; // minimum swipe distance in pixels

        const handleTouchStart = (event: TouchEvent) => {
            if (touchInProgress.current) return;
            touchInProgress.current = true;
            startTouchX = event.changedTouches[0].pageX;
        };

        const handleTouchEnd = (event: TouchEvent) => {
            if (!touchInProgress.current) return;
            endTouchX = event.changedTouches[0].pageX;
            const swipeDistance = endTouchX - startTouchX;

            if (swipeDistance > threshold && !swiping) {
                handleSwipeRight();
            } else if (swipeDistance < -threshold && !swiping) {
                handleSwipeLeft();
            }
            touchInProgress.current = false;
        };

        const handleSwipeRight = () => {
            setSwiping(true);
            switch (location.pathname) {
                case '/main':
                    navigate("/friends", {replace: true});
                    setTimeout(() => setSwiping(false), 300);
                    break;
                case '/tasks':
                    navigate("/main", {replace: true});
                    setTimeout(() => setSwiping(false), 300);
                    break;
                case '/shop':
                    navigate("/tasks", {replace: true});
                    setTimeout(() => setSwiping(false), 300);
                    break;
                case '/top':
                    setTimeout(() => setSwiping(false), 300);
                    break;
                case '/friends':
                    navigate("/top", {replace: true});
                    setTimeout(() => setSwiping(false), 300);
                    break;
            }
        };

        const handleSwipeLeft = () => {
            setSwiping(true);
            switch (location.pathname) {
                case '/main':
                    navigate("/tasks", {replace: true});
                    setTimeout(() => setSwiping(false), 300);
                    break;
                case '/friends':
                    navigate("/main", {replace: true});
                    setTimeout(() => setSwiping(false), 300);
                    break;
                case '/top':
                    navigate("/friends", {replace: true});
                    setTimeout(() => setSwiping(false), 300);
                    break;
                case '/shop':
                    setTimeout(() => setSwiping(false), 300);
                    break;
                case '/tasks':
                    navigate("/shop", {replace: true});
                    setTimeout(() => setSwiping(false), 300);
                    break;
            }
        };

        document.addEventListener("touchstart", handleTouchStart);
        document.addEventListener("touchend", handleTouchEnd);

        return () => {
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchend", handleTouchEnd);
        };
    }, [location.pathname, navigate]);

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/main" element={<MainPageNew/>}/>
                <Route path="/tasks" element={<TasksPageNew/>}/>
                <Route path="/friends" element={<FriendsPage/>}/>
                <Route path="/top" element={<TopPage/>}/>
                <Route path="/shop" element={<ShopPage/>}/>
                <Route path={"/"} element={<WelcomingPage1/>}/>
                <Route path={"/guide2"} element={<WelcomingPage2/>}/>
                <Route path={"/guide3"} element={<WelcomingPage3/>}/>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoute;