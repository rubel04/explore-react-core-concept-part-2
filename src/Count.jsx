import { useState } from "react"

export  default function Counter() {
    const [count, setCount] = useState(0)
    const HandleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const HandleDecrement = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <>
        <div style={{border: '2px solid tomato',padding: '10px', borderRadius:'10px',margin: '15px'}}>
            <h2>Tasbih: {count}</h2>
            <button onClick={HandleIncrement}>Increment</button>
            <button onClick={HandleDecrement}>Decrement</button>
        </div>
        </>
    )
}