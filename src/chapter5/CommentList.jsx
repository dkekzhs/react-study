import React from "react";
import Comment from "./Comment";

const comments =[
    {
        name : "이동재",
        comment : "안녕하세요 , 이동재에요"
    },
    {
        name : "김동성",
        comment : "안녕하세요"
    },
    {
        name : "이당재",
        comment : "하이요"
    }
]

function CommentList(props){
    return (
        <div>
            {comments.map((comment) =>{
                return (
                    <Comment name={comment.name} comment = {comment.comment}/>        
                );
            })}
            
        </div>
    );
}

export default CommentList;