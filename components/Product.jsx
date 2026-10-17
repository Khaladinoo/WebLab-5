import React from "react";
import Card from "./Card";
function Product({ title, price }) {
    return (
        <Card>
            {/* Display product name with custom styling */}
            <h3 style={{ margin: '0 0 8px 0', color: '#2c3e50'}}>
                {title}
            </h3>

            {/* Display formatted price label */}
            <p style={{ margin: 0, color: '#7f8c8d', fontWeight: 'bold' }}>
                Price: ${price}
            </p>
        </Card>
    )
}