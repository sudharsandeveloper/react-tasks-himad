import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Contexts/CartContext';

function AddToCart() {
    const [products, setProducts] = useState([]);
    const { AddToCart:AddToCartFunction } =  useContext(CartContext);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products);
        };
        fetchData();
    }, []);

    // console.log(cart);
    return (
        <div className='container d-flex flex-wrap gap-4 mb-5'>
            {products.map((item) => (
                <div key={item.id} className="col-xl-2 col-lg-2 col-md-3 col-sm-6 mt-4 mr-4">
                    <div className="card cart-card">
                        <div className='product-img d-flex justify-content-center'>
                            <img className='h-100 w-100' src={item.thumbnail} alt={item.title} />
                        </div>
                        <div className='text-center'>
                            <span className='d-block mt-3 brand-name product-title'>{item.title}</span>
                            <span className='d-block mt-1 product-description'>{item.description}</span>
                            <span className='d-block brand-name mt-1'>₹ {item.price}</span>
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <span className='btn btn-dark p-2' onClick={() => AddToCartFunction(item.id)}>Add to cart</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AddToCart;
