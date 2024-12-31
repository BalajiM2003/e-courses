import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const PaymentPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        cardNumber: "",
        expiry: "",
        cvv: "",
        name: "",
        email: "",
        address: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const alert = window.confirm("Payment successful");
        if (alert) {
            navigate("/")
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
                <h2 className="text-2xl font-semibold text-center mb-6">Payment Information</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Card Details */}
                    <div>
                        <label htmlFor="cardNumber" className="block text-lg font-medium text-gray-600">
                            Card Number
                        </label>
                        <input
                            type="number"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                            className="mt-1 block w-full border-gray-300 p-2 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                            required
                        />
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <label htmlFor="expiry" className="block text-lg font-medium text-gray-600">
                                Expiry Date
                            </label>
                            <input
                                type="month"
                                id="expiry"
                                name="expiry"
                                value={formData.expiry}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                className="mt-1 block w-full  border-gray-300  p-2 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="cvv" className="block text-lg font-medium text-gray-600">
                                CVV
                            </label>
                            <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                placeholder="123"
                                className="mt-1 block w-full p-2 border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                                required
                            />
                        </div>
                    </div>
                    {/* Billing Details */}
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-600">
                            Name on Card
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="mt-1 block w-full p-2 border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john.doe@example.com"
                            className="mt-1 block w-full p-2 border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-lg font-medium text-gray-600">
                            Billing Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="123 Main St, City, Country"
                            className="mt-1 block w-full p-2 border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                            required
                        />
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-sky-500 text-white font-medium py-2 px-4  hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                    >
                        Pay Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;
