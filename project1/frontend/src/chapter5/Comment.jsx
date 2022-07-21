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
        imageContainer : {},
        image : {
            width : 50,
            height : 50,
            borderRadius : 25,
        },
        contentContainer : {
            marginLeft : 8,
            display : "flex",
            flexDirection : "column",
            justifyContent : "center",
        },
        nameText : {
            color : "black",
            fontSize : 16,
            fontWeight : "bold",
        },
        commentText : {
            color : "black",
            fontSize : 16,
        }
};
function Comment(props){
    return (
        <div style={styles.wrapper} >
            <div style={styles.imageContainer}>
                <img 
                alt="profile"
                src="https://images.velog.io/images/rosarang/post/e42e7753-f6f8-439d-acf4-4911bcf1eac6/html.png"
                 style={styles.image}
                 />
            </div>
            
            <dov style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>
                    {props.comment}
                </span>
            </dov>
        </div>
    );
}

export default Comment;