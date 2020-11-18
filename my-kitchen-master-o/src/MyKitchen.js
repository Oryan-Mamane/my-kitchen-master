import { useState } from 'react';
import { dbStore } from './dbStore';
import Recipes from './Recipes';

const MyKitchen = () => {
  const [dishes, setDishes] = useState(dbStore);

  const prepareDi = dishes.filter(d => d.ready == 0);
  const readyDi = dishes.filter(d => d.ready == 1);

     const OnDishC = dishId => {
      var dish = dishes.find(d => d.id === dishId);
      //dish.ready =0 ;
      if (dish.ready > 0 ) {
        dish.ready =dish.ready-1;
      }
      else dish.ready = dish.ready+1;
      // error function example
      // dish.ready = dish.ready > 0 ? (dish.ready =dish.ready-1) : (dish.ready = dish.ready+1);
      setDishes(prevState => prevState.map(d => (d.id === dishId ? dish:  d)));
   };

  return (
    <>
       {prepareDi.length > 0} {
        <Recipes
          title="Prepare your dish:"
          dishes={prepareDi}
          onClicked={OnDishC}
        />
      }

      {/* else auto */}
     {
        <Recipes
          title="Ready to eat:"
          dishes={readyDi}
          onClicked={OnDishC}
        />
      }
    </>
  );
};

export default MyKitchen;
