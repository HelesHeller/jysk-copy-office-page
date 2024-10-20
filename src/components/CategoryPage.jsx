
import { Link } from 'react-router-dom';
import officeFurniture from '../assets/images/office-furniture.jpg';
import officeChairs from '../assets/images/office-chairs.jpg';
import gamingChairs from '../assets/images/gaming-chairs.jpg';
import computerDesk from '../assets/images/computer-desk.jpg';
import adjustableDesk from '../assets/images/adjustable-desk.jpg';
import officeAccessories from '../assets/images/office-accessories.jpg';
import storage from '../assets/images/storage.jpg';
import bookshelves from '../assets/images/bookshelves.jpg';
import shelves from '../assets/images/shelves.jpg';

const categories = [
    { name: "Офісні меблі", image: officeFurniture, route: "office-furniture" },
    { name: "Офісні крісла", image: officeChairs, route: "office-chairs" },
    { name: "Геймерські крісла", image: gamingChairs, route: "gaming-chairs" },
    { name: "Стіл комп'ютерний", image: computerDesk, route: "computer-desk" },
    { name: "Столи з регулюванням висоти", image: adjustableDesk, route: "adjustable-desk" },
    { name: "Аксесуари для офісу", image: officeAccessories, route: "office-accessories" },
    { name: "Зберігання", image: storage, route: "storage" },
    { name: "Книжкові шафи та перегородки", image: bookshelves, route: "bookshelves" },
    { name: "Полиці", image: shelves, route: "shelves" },
];

const CategoryPage = () => {
    return (
        <div className="category-page">
            <h1>Офіс і підкатегорії</h1>
            <div className="category-list">
                {categories.map((category, index) => (
                    <div key={index} className="category-item">
                        <Link to={`/category/${category.route}`}>
                            <img src={category.image} alt={category.name} />
                            <h3>{category.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
