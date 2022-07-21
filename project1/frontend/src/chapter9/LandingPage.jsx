import React , { useState } from "react";
import ToolBar from "./ToolBar";

function LandingPage(porps){
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const onClickLogin = () => {
        setisLoggedIn(true);
    };

    const onClickLogout = () => {
        setisLoggedIn(false);
    };

    return (
        <div>
            <ToolBar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
                />
                <div style={{ padding : 16 }}>소플과 함꼐하는 리액트 공부 </div>
        </div>
    );
}
export default LandingPage;