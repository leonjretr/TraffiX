import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";

// import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import TasksPage from "./components/pages/TasksPage.tsx";
// import TopPage from "./components/pages/TopPage.tsx";
// import FriendsPage from "./components/pages/FriendsPage.tsx";
// import ShopPage from "./components/pages/ShopPage.tsx";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//     },
//     {
//         path: "/friends",
//         element: <FriendsPage/>,
//     },
//     {
//         path: "/top",
//         element: <TopPage/>
//     },
//     {
//         path: "/tasks",
//         element: <TasksPage/>
//     },
//     {
//         path: "/shop",
//         element: <ShopPage/>
//     }
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
            <App/>
    </React.StrictMode>,
);
