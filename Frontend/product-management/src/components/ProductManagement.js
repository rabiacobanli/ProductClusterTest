import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://localhost:44334/Product';

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '' });
    const [searchPrice, setSearchPrice] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchAllProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${API_URL}`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching all products:', error);
            alert('Error fetching products');
        } finally {
            setLoading(false);
        }
    };

    const fetchProductsByPrice = async (price) => {
        try {
            setLoading(true);
            const response = await axios.get(`${API_URL}/${price}`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products by price:', error);
            alert('Error fetching products');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const productData = {
                name: newProduct.name,
                price: parseFloat(newProduct.price)
            };

            await axios.post(API_URL, productData);
            setNewProduct({ name: '', price: '' });
            await fetchAllProducts(); 
            alert('Product added successfully!');
        } catch (error) {
            console.log('Error:', error.response?.data);
            alert('Failed to add product');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchPrice) {
            fetchProductsByPrice(searchPrice); 
        } else {
            fetchAllProducts(); 
        }
    };

    return (
        <div className="container mx-auto p-4 space-y-6">
            <h1 className="text-2xl font-bold text-center mb-8">Product Management</h1>

            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4">Add New Product</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Product Name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            required
                        />
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            type="number"
                            step="0.01"
                            placeholder="Price"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
                    >
                        {loading ? "Adding..." : "Add Product"}
                    </button>
                </form>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4">Search by Price</h2>
                <form onSubmit={handleSearch} className="flex gap-4">
                    <input
                        className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        type="number"
                        step="0.01"
                        placeholder="Enter Price"
                        value={searchPrice}
                        onChange={(e) => setSearchPrice(e.target.value)}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
                    >
                        {loading ? "Searching..." : "Search"}
                    </button>
                </form>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4">Products</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Product Name</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Price</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Created Date</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {new Date(product.addedAt).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                            {products.length === 0 && (
                                <tr>
                                    <td colSpan={3} className="px-6 py-4 text-center text-sm text-gray-500">
                                        No products found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductManagement;