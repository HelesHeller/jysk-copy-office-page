import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import CategoryProducts from './components/CategoryProducts';
import Cart from './components/Cart';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Офис и подкатегории</Link>
                    </li>
                    <li>
                        <Link to="/cart">Корзина ({cart.length})</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<CategoryPage />} />
                <Route path="/category/:categoryName" element={<CategoryProducts addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cart={cart} />} />
            </Routes>
        </Router>
    );
};

export default App;
