import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import FriendsPage from "../pages/FriendsPage.tsx";
import TopPage from "../pages/TopPage.tsx";
import ShopPage from "../pages/ShopPage.tsx";
import {AnimatePresence} from "framer-motion";
import {useEffect, useRef} from "react";
import WelcomingPage1 from "../pages/WelcomingPage1.tsx";
import WelcomingPage2 from "../pages/WelcomingPage2.tsx";
import WelcomingPage3 from "../pages/WelcomingPage3.tsx";
import MainPageNew from "../pages/MainPageNew.tsx";
import TasksPageNew from "../pages/TasksPageNew.tsx";
import {observer} from "mobx-react-lite";
import routerStore from "../../stores/routerStore.ts";

const AnimatedRoute = observer(() => {

    const navigate = useNavigate();
    let location = useLocation();
    const touchInProgress = useRef<boolean>(false); // To keep track of ongoing touch

    useEffect(() => {
        let startTouchX: number = 0;
        let endTouchX: number = 0;
        let startTouchY: number = 0;
        let endTouchY: number = 0;
        const thresholdX = 85; // minimum X swipe distance in pixels
        const thresholdY = 35;

        const handleTouchStart = (event: TouchEvent) => {
            if (touchInProgress.current) return;
            touchInProgress.current = true;
            startTouchX = event.changedTouches[0].pageX;
            startTouchY = event.changedTouches[0].pageY;
        };

        const handleTouchEnd = (event: TouchEvent) => {
            if (!touchInProgress.current) return;
            endTouchX = event.changedTouches[0].pageX;
            endTouchY = event.changedTouches[0].pageY;
            const swipeDistanceX = endTouchX - startTouchX;
            const swipeDistanceY = Math.abs(endTouchY - startTouchY); // Math abs чтобы значение всегда было положительным

            if (startTouchX < 100 && swipeDistanceY < thresholdY && swipeDistanceX > thresholdX && !routerStore.isNavigating) {
                handleSwipeRight(); // 100 - максимальное значение X при котором регистрируется startTouch при свайпе вправо
            }
            if (startTouchX > 350 && swipeDistanceY < thresholdY && swipeDistanceX < -thresholdX && !routerStore.isNavigating) {
                handleSwipeLeft(); // 350 - максимальное значение X при котором регистрируется startTouch при свайпе влево
            }
            touchInProgress.current = false;
        };

        const handleSwipeRight = () => {
            routerStore.setNavigatingTrue();
            switch (location.pathname) {
                case '/main':
                    navigate("/friends", {replace: true});
                    setTimeout(() => routerStore.setNavigatingFalse(), 800);
                    break;
                case '/tasks':
                    navigate("/main", {replace: true});
                    setTimeout(() => routerStore.setNavigatingFalse(), 800);
                    break;
                case '/shop':
                    navigate("/tasks", {replace: true});
                    setTimeout(() => routerStore.setNavigatingFalse(), 800);
                    break;
                case '/top':
                    setTimeout(() => routerStore.setNavigatingFalse(), 800);
                    break;
                case '/friends':
                    navigate("/top", {replace: true});
                    setTimeout(() => routerStore.setNavigatingFalse(), 800);
                    break;
            }
        };

        const handleSwipeLeft = () => {
            routerStore.setNavigatingTrue();
            switch (location.pathname) {
                case '/main':
                    navigate("/tasks", {replace: true});
                    setTimeout(() => routerStore.setNavigatingFalse(), 800);
                    break;
                case '/friends':
                    navigate("/main", {replace: true});
                    setTimeout(() => routerStore.setNavigatingFalse(), 800);
                    break;
                case '/top':
                    navigate("/friends", {replace: true});
                    setTimeout(() => routerStore.setNavigatingFalse(), 800);
                    break;
                case '/shop':
                    setTimeout(() => routerStore.setNavigatingFalse(), 800);
                    break;
                case '/tasks':
                    navigate("/shop", {replace: true});
                    setTimeout(() => routerStore.setNavigatingFalse(), 800);
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
});

export default AnimatedRoute;