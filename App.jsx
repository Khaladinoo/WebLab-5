import React, {useState} from "react";
import ProductList from "./components/ProductList";

function App() {
    const [showProducts, setShowProducts] = useState(true);
    const [name, setName] = useState('');
    return (
        <div style={{maxWidth: '600px', margin: '40px auto', frontFamily: 'Arial, sans-serif', padding: '0 20px'}}>
            <h1>React Product Dashboard</h1>
            
        </div>
    )
}