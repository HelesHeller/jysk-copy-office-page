import PropTypes from 'prop-types';

const CategoryItem = ({ name, image }) => {
    return (
        <div className="category-item">
            <img src={image} alt={name} />
            <h3>{name}</h3>
        </div>
    );
};

// Валидация props с помощью PropTypes
CategoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default CategoryItem;
