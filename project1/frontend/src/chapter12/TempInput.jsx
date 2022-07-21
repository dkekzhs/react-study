const scaleNames = {
    c : "화씨",
    f : "섭씨",
};

function TempInput(props) {
    const handleChange = (event) =>{
        props.onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요 (단위 : {scaleNames[props.scale]})
            </legend>
            <input value={props.tempureature} onChange={handleChange}/>
        </fieldset>
    );
}
export default TempInput;