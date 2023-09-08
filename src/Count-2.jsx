import { useState } from "react"

export default function Counter2() {
    const [productCount, setProductCount] = useState(0);
    const HandleAddProduct = () => {
        const newProductCount = productCount + 1;
        setProductCount(newProductCount);
    }
    const HandleRemoveProduct = () => {
        const newProductCount = productCount - 1;
        setProductCount(newProductCount);
    }
    return (
        <div style={{border: '2px solid blue',padding: '10px', borderRadius:'10px',margin: '15px'}}>
            <h2>Add products: {productCount}</h2>
            <button onClick={HandleAddProduct}>Add</button>
            <button onClick={HandleRemoveProduct}>Remove</button>
        </div>
    )
}