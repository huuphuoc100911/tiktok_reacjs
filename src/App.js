import { useState, useMemo, memo, useRef } from "react";

function App() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);
    const nameRef = useRef();

    const handleSubmit = () => {
        setProducts([
            ...products,
            {
                name,
                price: parseInt(price),
            },
        ]);
        setName("");
        setPrice("");
        nameRef.current.focus();
    };

    const total = useMemo(() => {
        return products.reduce(function (total, product) {
            return total + product.price;
        }, 0);
    }, [products]);

    return (
        <div style={{ padding: "10px 32px" }}>
            <input
                value={name}
                ref={nameRef}
                placeholder="Enter name..."
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder="Enter price..."
                onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <br />
            Total: {total}
            <br />
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
