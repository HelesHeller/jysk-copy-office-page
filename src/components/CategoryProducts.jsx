import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CategoryProducts.css';

const products = {
    "office-furniture": [
        {
            id: 1,
            name: "Офісний стіл",
            price: 1500,
            description: "Стильний офісний стіл для сучасного офісу",
            image: "/src/assets/images/products/office-desk.jpg"
        },
        {
            id: 2,
            name: "Офісний шафа",
            price: 2500,
            description: "Місткий шафа для зберігання документів",
            image: "/src/assets/images/products/office-shelf.jpg"
        }
    ],
    "office-chairs": [
        {
            id: 3,
            name: "Крісло для офісу",
            price: 2000,
            description: "Ергономічне крісло з підтримкою спини",
            image: "/src/assets/images/products/office-chair1.jpg"
        },
        {
            id: 4,
            name: "Крісло менеджера",
            price: 3500,
            description: "Зручне крісло для офісних працівників",
            image: "/src/assets/images/products/manager-chair.jpg"
        }
    ],
    "gaming-chairs": [
        {
            id: 5,
            name: "Геймерське крісло",
            price: 4500,
            description: "Комфортне крісло для довгих геймінг-сесій",
            image: "/src/assets/images/products/gaming-chair.jpg"
        },
        {
            id: 6,
            name: "Геймерське крісло Pro",
            price: 5500,
            description: "Професійне крісло для геймерів",
            image: "/src/assets/images/products/gaming-chair-pro.jpg"
        }
    ],
    "computer-desk": [
        {
            id: 7,
            name: "Комп'ютерний стіл",
            price: 3000,
            description: "Сучасний стіл для роботи за комп'ютером",
            image: "/src/assets/images/products/computer-desk1.jpg"
        },
        {
            id: 8,
            name: "Малий комп'ютерний стіл",
            price: 1800,
            description: "Компактний стіл для домашнього офісу",
            image: "/src/assets/images/products/small-computer-desk.jpg"
        }
    ],
    "adjustable-desk": [
        {
            id: 9,
            name: "Стіл з регулюванням висоти",
            price: 4500,
            description: "Стіл з можливістю регулювання висоти",
            image: "/src/assets/images/products/adjustable-desk1.jpg"
        }
    ],
    "office-accessories": [
        {
            id: 10,
            name: "Настільний органайзер",
            price: 500,
            description: "Органайзер для зберігання канцелярії",
            image: "/src/assets/images/products/office-accessories1.jpg"
        }
    ],
    "storage": [
        {
            id: 11,
            name: "Полиця для документів",
            price: 1200,
            description: "Зручна полиця для зберігання документів",
            image: "/src/assets/images/products/storage1.jpg"
        }
    ],
    "bookshelves": [
        {
            id: 12,
            name: "Книжкова шафа",
            price: 3000,
            description: "Стильна книжкова шафа для дому чи офісу",
            image: "/src/assets/images/products/bookshelves1.jpg"
        }
    ],
    "shelves": [
        {
            id: 13,
            name: "Настінна полиця",
            price: 800,
            description: "Компактна настінна полиця для дрібниць",
            image: "/src/assets/images/products/shelf.jpg"
        }
    ]
};

const CategoryProducts = ({ addToCart }) => {
    const { categoryName } = useParams();

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div className="category-products-container">
            <h2 className="category-title">Товари для категорії: {categoryName}</h2>
            {products[categoryName]?.map((product) => (
                <div key={product.id} className="product-item">
                    <div className="product-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-info">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">Ціна: {product.price} грн</p>
                        <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
                            Добавити до кошика
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

CategoryProducts.propTypes = {
    addToCart: PropTypes.func.isRequired
};

export default CategoryProducts;
