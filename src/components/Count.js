import { useState } from "react"

const Count = () =>{
    const[counter, setCounter] = useState(0)
    const plusOne = () => setCounter(counter+1)



    return(
        <>
        <div className="counter">
            <h1>Quick Count:</h1>
                <h2>{counter} </h2>
        </div>
        <div className="buttons">
                <button onClick={()=>{setCounter(counter-1)}}>-</button>
                <button onClick={plusOne}>+</button> 
        </div>
            </>
        
    )
}

export default Count