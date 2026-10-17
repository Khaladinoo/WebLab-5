import React, {useState} from "react";
import ProductList from "./components/ProductList";

function App() {
    const [showProducts, setShowProducts] = useState(true);
    const [name, setName] = useState('');
    return (
        <div style={{maxWidth: '600px', margin: '40px auto', frontFamily: 'Arial, sans-serif', padding: '0 20px'}}>
            <h1>React Product Dashboard</h1>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                    User Name:
                </label>
                <input
                type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    style={{ padding: '10px', width: '100%', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                </div>
        </div>
    )
}