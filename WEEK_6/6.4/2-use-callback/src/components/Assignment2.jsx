
//create a component with a text input field and button . 
//goal is to display an alert with the text entered onbuttonclick.
//useCallback to memoize the event handler function that triggers the alert
//

import { useCallback, useState } from "react";

export function Assignment2(){
    const [inputText, setInputText] = useState('');

    const showAlert= useCallback(()=>{
        alert(inputText);
    },[inputText]);
    
    
    
    
    return (
        <div>
            <input type="text" value={inputText}
            onChange={(e)=> setInputText(e.target.value)}
            placeholder="Enter Some Text" />
            <button onClick={showAlert}>Show alert!</button>
        </div>
    )
}