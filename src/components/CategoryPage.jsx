import React from 'react';
import CategoryItem from './CategoryItem';
import officeFurniture from '../assets/images/office-furniture.jpg';
import officeChairs from '../assets/images/office-chairs.jpg';
import gamingChairs from '../assets/images/gaming-chairs.jpg';
import computerDesk from '../assets/images/computer-desk.jpg';
import adjustableDesk from '../assets/images/adjustable-desk.jpg';
import officeAccessories from '../assets/images/office-accessories.jpg';
import storage from '../assets/images/storage.jpg';
import bookshelves from '../assets/images/bookshelves.jpg';
import shelves from '../assets/images/shelves.jpg'; // Путь к последнему файлу

const CategoryPage = () => {
    const categories = [
        { name: "Офісні меблі", image: officeFurniture },
        { name: "Офісні крісла", image: officeChairs },
        { name: "Геймерські крісла", image: gamingChairs },
        { name: "Стіл комп'ютерний", image: computerDesk },
        { name: "Столи з регулюванням висоти", image: adjustableDesk },
        { name: "Аксесуари для офісу", image: officeAccessories },
        { name: "Зберігання", image: storage },
        { name: "Книжкові шафи та перегородки", image: bookshelves },
        { name: "Полиці", image: shelves },
    ];

    return (
        <div className="category-page">
            <h1>Офіс і підкатегорії</h1>
            <div className="category-list">
                {categories.map((category, index) => (
                    <CategoryItem key={index} name={category.name} image={category.image} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
