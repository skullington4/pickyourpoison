import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';

export default function Home( { cartItems, setCartItems } ) {
    const [orders, setOrders] = useState([]);
    const [filter, setFilter] = useState('');



    const handleAddToCart = (order) => {
        const drink = { 
            category: 'custom',
            name: order.title,
            price: order.price,
            glass: order.glass,
            spirits: order.spirits,
            mixers: order.mixers,
            garnishes: order.garnishes,
        };
        setCartItems([...cartItems, drink]);
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    const filteredOrders = orders.filter((order) => {
        const filterLower = filter.toLowerCase();
        return (
            order.glass.toLowerCase().includes(filterLower)  ||
            order.spirits.some((spirit) => spirit.toLowerCase().includes(filterLower)) ||
            order.mixers.some((mixer) => mixer.toLowerCase().includes(filterLower)) ||
            order.garnishes.toLowerCase().includes(filterLower)
        );
    });

    return (
        <div className="top">
            <h1>Welcome to Pick Your Poison Bar</h1>
            <p>Our bar offers a wide selection of drinks and a cozy atmosphere for you to enjoy.</p>
            <div>Please feel free to check out our menu for classic cocktails or 
                go to the create tab to create a cocktail from scratch.
            </div>
            

        </div>
    );
}