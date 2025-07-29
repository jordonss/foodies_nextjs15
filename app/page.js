import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Time to get started!</h1>
      <p>
        <Link href="/meals">Explore Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Your Meal</Link>
      </p>
      <p>
        <Link href="/community">Join the Community</Link>
      </p>
    </main>
  );
}
