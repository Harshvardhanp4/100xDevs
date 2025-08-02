//create a component that tracks and displays the number of times it has been rendered. Use useRef to
//create a varaible that persists across renders without causing additional renders when it changes.

import { useState,useEffect,useCallback,useRef } from "react";

// let numberofTimesReRendered = 0;// this is a way but its not good
export function Assignment2 (){
    
    const[count, setCount] = useState(0);

    const numberofTimesReRendered = useRef(0);
    const handleReRender = ()=>{
        setCount(count+1)
    };

    numberofTimesReRendered.current = numberofTimesReRendered.current +1;
    
    return(
        <div>
            <p>This component has rendered {numberofTimesReRendered.current} times!</p>
            <button  onClick={handleReRender}>Force Re-Render</button>
        </div>
    )
}