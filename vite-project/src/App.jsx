import React, { useState } from 'react';
import ProductList from './components/ProductList';

/**
 * App Component (Root)
 * 
 * Why we wrote this code:
 * 1. Manages top-level application states using the 'useState' React hook.
 * 2. Implements the Controlled Component pattern for the text input field.
 * 3. Demonstrates Conditional Rendering ({showProducts && <ProductList />}) to show/hide UI sections dynamically.
 * 4. Ensures strict compliance with assignment constraints: No manual DOM manipulation, no useEffect, no external libraries.
 */
function App() {
    // State 1: Boolean flag controlling the visibility toggle of ProductList
    const [showProducts, setShowProducts] = useState(true);
    
    // State 2: String storing user input dynamically
    const [name, setName] = useState('');

    return (
        <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial, sans-serif', padding: '0 20px' }}>
            <h1>React Product Dashboard</h1>

            {/* Controlled Input Section */}
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

            {/* Dynamic Greeting Message */}
            <p style={{ fontSize: '18px', color: '#333' }}>
                Welcome, {name.trim() !== '' ? name : 'Guest'}!
            </p>

            {/* Toggle Button */}
            <button 
                onClick={() => setShowProducts(!showProducts)}
                style={{ 
                    padding: '10px 16px', 
                    cursor: 'pointer', 
                    marginBottom: '20px',
                    backgroundColor: showProducts ? '#dc3545' : '#28a745',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '4px'
                }}
            >
                {showProducts ? 'Hide Products' : 'Show Products'}
            </button>

            {/* Conditional Rendering */}
            {showProducts && <ProductList />}
        </div>
    );
}

export default App;