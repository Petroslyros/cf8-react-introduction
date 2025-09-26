import {useState} from "react";


const FunctionalComponentWithState = () => {
   const [count, setcount] = useState(0);

   const increaseCount = () => {
       setcount(count + 1);
   }

    return (
        <>
        <h1 className="text-center my-12">Count is <strong>{count}</strong></h1>
            <div className="text-center">
                <button onClick={increaseCount} className="bg-cf-dark-gray text-white py-2 px-4">
                    Increase
                </button>
            </div>
        </>
    )
}

export default FunctionalComponentWithState;