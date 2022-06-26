import React , { useState } from "react";

function SignUp(props){
    const [name , setName] = useState("");
    const [gender , setGender] = useState("남자");

    const handleChangeName = (event) =>{
        setName(event.target.value);
    };

    const handleChangeGender = (event) =>{
        setGender(event.target.value);
    };
    const handleSumbit = (event) => {
        alert(`이름 : ${name} , 성별 : ${gender}`);

    };
    return (
      <form onSubmit={handleSumbit}>
        <label >
            이름 : <input type="text" value={name} onChange={handleChangeName}/>
        </label>
        <br/>
        <label>
            <select value={gender} onChange={handleChangeGender}>
            <option value = "남자" >남자</option>
            <option value = "여자" >여자</option>
            </select>
        </label>
        <button type="sumbit">제출하기</button>
      </form>  
    );
}

export default SignUp;