
import { useState } from "react"

export function Button(){
    const[bgcolor, setbgColor] = useState("white");
    return (
        <div style={{ background: bgcolor,  height: "100vh", width: "100vw"}}>
        <button onClick={()=>{setbgColor("red")}}style={{background: "red", color: "white"}}>Red</button>
        <button onClick={()=>{setbgColor("blue")}}style={{background: "blue", color: "white"}}>Blue</button>
        <button onClick={()=>{setbgColor("black")}}style={{background: "black", color: "white"}}>Black</button>
    </div>
    )}