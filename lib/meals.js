import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
  // Fetch all meals from the database
  // throw new Error("Database connection failed"); // Simulate a database error
  return db.prepare("SELECT * FROM meals").all();
}

export function getMealBySlug(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, {
    lower: true,
  });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const imageName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${imageName}`);
  const bufferImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferImage), (error) => {
    if (error) {
      throw new Error("Failed to write image file");
    }
  });

  meal.image = `/images/${imageName}`;

  db.prepare(
    `
		INSERT INTO meals (title, summary, instructions, image, slug, creator, creator_email)
		VALUES (@title, @summary, @instructions, @image, @slug, @creator, @creator_email)
		`
  ).run(meal);
}
