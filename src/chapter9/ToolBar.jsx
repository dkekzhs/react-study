import React from "react";

const styles = {
    wrapper : {
        marigin : 8,
        padding : 8,
        display : "flex",
        flexDirection : "row",
        border : "1px solid black",
        borderRadius : 16,
        },
    greeting : {
        marginLeft : 8,
    },
}

function ToolBar(props){
    const {isLoggedIn, onClickLogin ,onClickLogout}= props;
    return (
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}> 환영합니다 !</span>}
            {isLoggedIn ?(
                <button onClick={onClickLogout} >로그 아웃</button>
            ) : (
                <button onClick={onClickLogin} >로그 인</button>
            )}
        </div>
    );
}

export default ToolBar;