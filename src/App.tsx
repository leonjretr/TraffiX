import {BrowserRouter as Router} from "react-router-dom";
import AnimatedRoute from "./components/router/AnimatedRoute.tsx";
// import {useEffect, useState} from "react";
// import {IUserApiResponse} from "./components/types/types.tsx";
// import fetchUsers from "./fetches/fetchUser.ts";
import userStore from "../src/stores/userStore.ts";
import {observer} from "mobx-react-lite";

const App = observer(() => {

    userStore.fetchAllUsersStore();
    userStore.fetchUserData();
    userStore.userAuthorization();

    return (
        <div className="App bg-bgNew min-h-screen">
            <Router>
                <AnimatedRoute/>
            </Router>
        </div>
    );
});

export default App;
