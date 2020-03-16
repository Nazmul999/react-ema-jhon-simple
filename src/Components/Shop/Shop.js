import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
   const[products, setproducts] = useState(first10)
    const [] = useState(first10);
    const [cart, setCart] = useState([]);

   const handleAddProduct = (products) => {
    const newCart = [...cart, products];
    setCart(newCart);
   }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                        products.map(prod => <Products
                            handleAddProduct = {handleAddProduct} 
                            product ={prod}> </Products>)
                    }
            </div>
           <div className="cart-container">
               <Cart cart={cart}> </Cart>
           </div>
            
            
        </div>
    );
};

export default Shop;