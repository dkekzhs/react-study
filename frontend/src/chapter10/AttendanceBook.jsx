import React from "react";

const students =[
    {
        id : 1,
        name : "a"
    },
    {
        id : 2,
        name : "b"
    },
    {
        id : 3,
        name : "c"
    },
    {
        id : 4,
        name : "e"
    },
];

function AttendanceBook(props){
    return (
        <ul>
            {students.map((student)=>
            {
                return <li key={`student-id-${student.id}`}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;