import React, { useState, useEffect } from 'react';
import Service from './service';

const Details = ({ match }) => {

    useEffect(() => {
        fetchItem();
    }, [])

    const db = new Service();

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const id = match.params.id;
        const data = await db.getProductById(id);
        setItem(data);
    }

    return (
        <div>
            <h3>Details for ID: {item.objectId}</h3>
            <p>name: {item.name}</p>
            <p>is on stock: {item.available ? 'yes' : 'no'}</p>
            <p>price: {item.price}</p>
        </div>
    )
}

export default Details;