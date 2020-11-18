import Recipe from './Recipe';
import PropTypes from 'prop-types';
import { CardColumns } from 'react-bootstrap';

const Recipes = ({ title, dishes, onClicked }) => {
  return (
    <>
      <h4 style={{textAlign:"center", margin:"25px"}}>{title}</h4>
      <h4 style={{textAlign:"center", margin:"25px"}}>{dishes.length }</h4>
      <CardColumns>
        {dishes.map(dish => (
          <Recipe
            key={dish.id}
            dishId={dish.id}
            dishName={dish.name}
            dishDesc={dish.des}
            dishImage={dish.img}
            dishReady={dish.ready}
            onClicked={onClicked}
          />
        ))}
      </CardColumns>
    </>
  );
};
Recipes.propTypes = {
  dishes: PropTypes.array.isRequired,
  onDishClicked: PropTypes.func.isRequired,
};

export default Recipes;
