import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if(count <= 0) {
            return setCount(0);
        }
        setCount(count - 1);
    }

    const reset = () =>{
        setCount(0);
    }

    function setCountToZero() {
        setCount(0);
    }

    console.log(count)
    return(
        <div className="counter-container">
            {count <= 0 ? (<p className="count-display">0</p>) : (<p className="count-display">{count}</p>)}
            
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );
}
export default Counter