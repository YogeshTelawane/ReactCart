//import { useRef } from "react";

const ColorDiv = ({color})=>{
    //const inputRef = useRef();
    return (
        <div 
        style={{width: "300px", height:"300px", border:"solid black", backgroundColor:color}}>
            {color ? color : "Emply Value"}
        </div>
    )
}

ColorDiv.defaultProps = {
    color : 'Empty color value'
}

export default ColorDiv;