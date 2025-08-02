
//create a component with a text input field and a button
//when the component mounts or the button is clicked automatically
//focus the text inoput field using useRef

import { useState,useEffect,useCallback,useRef } from "react";

export function Assignment1 (){
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus()
    },[]);
 
    const handleButtonClick = ()=>{
    inputRef.current.focus()
 }   
    
    return(
        <div>
            <input ref={inputRef} 
            type="text"
            placeholder="Enter text" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    )
}