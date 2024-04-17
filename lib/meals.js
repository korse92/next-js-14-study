import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise(r => setTimeout(r, 5000));

  //run -> insert, update, delete
  //all -> select all / get -> select one
  const meals = db.prepare('SELECT * FROM meals').all();
  return meals;
}