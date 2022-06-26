import React, { useState } from "react";
import TempInput from "./TempInput";

function BoildingVerdict(props){
    if(props.celsius >= 100){
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 꿇지 않습니다.</p>
}

function toCelsius(fahrenheit){
    return ((fahrenheit -32 )*5 )/9;
}

function toFahrenheit(celsius){
    return ((celsius *9)/5 +32);
}

function tryConvert(tempureature,convert){
    const input =parseFloat(tempureature);
    if(Number.isNaN(input)){
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000)/ 1000;
    return rounded.toString();
}

function Calcul(props) {
    const [tempureature, setTempureature]  = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (tempureature) =>{
        setTempureature(tempureature);
        setScale("c");
    };
    const handleFahrenheitChange = (tempureature) =>{
        setTempureature(tempureature);
        setScale("f");
    };

    const celsius = scale === "f" ? tryConvert(tempureature,toCelsius) : tempureature;
    const fahrenheit = scale === "c" ? tryConvert(tempureature,toFahrenheit) : tempureature;

    return (
        <div>
            <TempInput scale="c" tempureature={celsius} onTemperatureChange ={handleCelsiusChange}/>
            <TempInput scale="f" tempureature={fahrenheit} onTemperatureChange ={handleFahrenheitChange}/>
            <BoildingVerdict celsius={parseFloat(celsius)}/>
        </div>
    );
}
export default Calcul;