export default function MealDetailPage({ params }) {
  const { mealSlug } = params;

  return (
    <div>
      <h1>Meal Details for {mealSlug}</h1>
      <p>Here you can find more information about the meal.</p>
    </div>
  );
}
