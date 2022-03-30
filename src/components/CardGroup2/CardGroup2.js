import React from 'react';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {
    const products = [
        { id: 1, name: 'Laptop Pro', price: 30000 },
        { id: 2, name: 'Laptop Crow', price: 30000 },
        { id: 3, name: 'Laptop Grow', price: 30000 },
    ]
    return (
        <div>
            <CardGroup2>
                {
                    products.map(product => <Card2
                        product={product}
                        key={product.id}
                    ></Card2>)
                }
            </CardGroup2>
        </div>
    );
};

export default CardGroup2;