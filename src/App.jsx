import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoryPage from './components/CategoryPage';
import './index.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/office" element={<CategoryPage />} />
                {/* Добавьте маршруты для других категорий */}
            </Routes>
        </Router>
    );
}

export default App;
