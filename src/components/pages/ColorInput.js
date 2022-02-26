const ColorInput = ({color, setColor})=>{

    return (
        <div>
            <input type="text" 
            placeholder="Enter color" 
            value={color} 
            onChange={(e)=>setColor(e.target.value)}></input>
        </div>
    )
}




export default ColorInput;