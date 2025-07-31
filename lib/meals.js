import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
  // Fetch all meals from the database
  return db.prepare("SELECT * FROM meals").all();
}
