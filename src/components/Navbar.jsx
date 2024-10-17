
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/office">Офіс</Link></li>
                {/* Добавьте другие ссылки на категории */}
            </ul>
        </nav>
    );
};

export default Navbar;
