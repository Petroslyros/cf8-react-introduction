import {useState} from "react";
import CounterButton from "./CounterButton.tsx";


const Counter = () => {

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if(count > 0) {
            setCount(count - 1);
        }

    }
    const resetCount = () => {
        setCount(0);
    }

    return (
        <>

            <>
                <h1 className="text-center my-12">Count is <strong>{count}</strong></h1>
                <div className="text-center space-x-4">
                    <CounterButton onClick={increaseCount} label="Increase" />
                    <CounterButton onClick={decreaseCount} label="Decrease" disabled={count === 0}/>
                    <CounterButton onClick={resetCount} label="Reset" disabled={count === 0} addClasses="bg-cf-dark-red disabled:bg-red-500"/>
                </div>
            </>
        </>
    )
}

export default Counter;