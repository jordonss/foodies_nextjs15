import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import { getAllMeals } from "@/lib/meals";

export default async function MealsPage() {
  const meals = await getAllMeals(); // Call the function to fetch meals, simulating a delay

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created{" "}
          <span className={classes.highlight}>by YOU</span>
        </h1>
        <p>Craft your meal experience with our diverse options.</p>
        <p className={classes.cta}>
          <Link href="meals/share">Share your favorite recipes!</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
