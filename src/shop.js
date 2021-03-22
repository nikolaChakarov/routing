import React, { useState, useEffect } from 'react';
import Service from './service';
import { Link } from 'react-router-dom';

const Shop = () => {

    const db = new Service();

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await db.getAllProducts();
        setItems(data);
    }

    return (
        <div>
            <h2>Shop Page</h2>
            {items.map(item => (
                <h3 key={item.objectId}>
                    <Link to={`/shop/${item.objectId}`}>{item.name}</Link>
                </h3>
            ))}
        </div>
    )
}

export default Shop;