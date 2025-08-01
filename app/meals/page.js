import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import { getAllMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getAllMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created <span className={classes.highlight}>by YOU</span>
        </h1>
        <p>Craft your meal experience with our diverse options.</p>
        <p className={classes.cta}>
          <Link href="meals/share">Share your favorite recipes!</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
