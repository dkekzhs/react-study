import React from "react";
import Book from "./book";

function Libray(props){
    return (
        <div>
            <Book name ="처음만난 파이썬" numOfPage={300}/>
            <Book name ="처음만난 AWS" numOfPage={300}/>
            <Book name ="처음만난 리액트" numOfPage={300}/>
            
        </div>
    );
}
export default Libray;