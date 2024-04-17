import MealItem from './meal-item';
import classes from './meals-grid.module.css';

function MealsGrid({meals}) {
  return ( 
    <ul className={classes.meals}>
      {meals.map(meal => (
        <li key={meal.id}>
          <MealItem {...meals} />
        </li>
      ))}
    </ul>
   );
}

export default MealsGrid;