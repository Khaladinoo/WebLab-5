import React from "react";
import Product from "./Product";

function ProductList() {
    const products = [
        { id: 101, title: 'Wireless Headphones', price: 99.99 },
        { id: 102, title: 'Mechanical Keyboard', price: 129.50 },
        { id: 103, title: 'Gaming Mouse', price: 59.00 }
    ];
    return (
        <div>
            <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '8px' }}>
                Product Catalog
            </h2>
            {products.map(product => (
                <Product 
                    key={product.id} 
                    title={product.title} 
                    price={product.price} 
                />
            ))}
        </div>
    );
}
export default ProductList;