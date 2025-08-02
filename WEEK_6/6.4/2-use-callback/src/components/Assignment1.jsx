//create a counter component with increment and decrement functions.
//pass these functions to a chld component to perform increment and decrement actions
//useCallback to ensure that these functions are not recreated on each render.


import { useCallback, useState, memo } from "react";

export function Assignment1(){
    const [count, setCount] = useState(0);

        const handleIncrement=useCallback(()=>{
            setCount(count => {
                return count+1});
        },[]);

        const handleDecrement = useCallback(()=>{
            setCount(count =>{
                return count-1});
        },[]);
    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement ={handleIncrement} onDecrement={handleDecrement}/>
        </div>
    );

}

const CounterButtons = memo(({onIncrement, onDecrement})=>(
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
))

