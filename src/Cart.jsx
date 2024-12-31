import React from 'react';
import { useCart } from './CartContext';

export const Cart = () => {
    const { cartItems, removeFromCart } = useCart();
    console.log(cartItems)
    // Check if cartItems is an array to avoid destructuring errors
    if (!cartItems || cartItems.length === 0) {
        return <p className="p-8 text-lg pb-80">Your cart is empty. Start adding items!</p>;
    }

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            <div className="space-y-4">
                {cartItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-4 border border-gray-300 rounded-lg"
                    >
                        <div>
                            <h3 className="text-lg font-bold">{item.name}</h3>
                            <p className="text-gray-600">Price: {item.price}</p>
                        </div>
                        <div className='flex gap-4'>
                            <button
                                className="text-red-600 hover:text-red-800"
                            >
                                Buy Now
                            </button>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-600 hover:text-red-800"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
