import React from 'react';
import Card from '../Card/Card';


const CardGroup = () => {
    const products = [
        { id: 1, name: 'Laptop Pro', price: 30000 },
        { id: 2, name: 'Laptop Crow', price: 30000 },
        { id: 3, name: 'Laptop Grow', price: 30000 },
    ]
    return (
        <div>
            <h2>This is My Cards</h2>
            <div className="card-group">
                {
                    products.map(product => <Card
                        product={product}
                        key={product.id}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;