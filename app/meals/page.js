import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";

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
      <main className={classes.main}><MealsGrid meals={[]} /></main>
    </>
  );
}
