const express = require("express");
const router = express.Router();
const pool = require("../db.js");
const { customAlphabet } = require("nanoid");

// CREATE BLOG
router.post("/new", async (req, res) => {
  try {
    const { categories, author, heading, caption, article_data, likes, imageURL } =
      req.body;
    // add nano id logic
    const nanoid = customAlphabet(
      "1234567890abcdefghijklmnopqrstuvqxyzABCDEFGHIJKLMNOPQRSTUVQXYZ",
      5
    );
    // console.log(heading);
    let slug = `${heading
      .toLowerCase()
      .split(" ")
      .slice(0, 5)
      .join("-")}-${nanoid()}`;
    let date_created = [new Date().toISOString()];
    // add date create logic
	console.log([slug,
        categories,
        author,
        heading,
        caption,
        article_data,
        date_created,
        likes,
		imageURL])
    const newBlog = await pool.query(
      `INSERT INTO 
			blog(slug , categories, author, heading, caption, article_data, date_created, likes) 
			VALUES($1, $2, $3, $4, $5, $6, $7, $8) 
		  RETURNING *`,
      [
        slug,
        categories,
        author,
        heading,
        caption,
        article_data,
        date_created,
        likes,
		imageURL
      ]
    );
	let result = newBlog.rows[0];
	let category = result.categories.startsWith("{")?JSON.parse(result.categories.replace("{","[").replace("}","]")):[result.categories];
    res.json({
		...result,
		categories: category,
	});
  } catch (error) {
    console.error(error);
  }
});

// READ/SHOW ALL BLOGS
router.get("/all", async (req, res) => {
  try {
    const allBlogs = await pool.query("SELECT * FROM blog");
    res.json(allBlogs.rows.map((item)=>{
		let category = item.categories.startsWith("{")?JSON.parse(item.categories.replace("{","[").replace("}","]")):[item.categories];
		return({
			...item,
			categories: category
		})
	}));
  } catch (err) {
    console.error(err);
  }
});

// GET A SINGLE BLOG
router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await pool.query("SELECT * FROM blog WHERE slug = $1", [slug]);
	let result = blog.rows[0];
	let category = result.categories.startsWith("{")?JSON.parse(result.categories.replace("{","[").replace("}","]")):[result.categories];
    res.json({
		...result,
		categories: category,
	});
  } catch (err) {
    console.error(err);
  }
});

// GET A CATEGORY
router.get("/categories/:category", async (req, res) => {
  try {
    const { category } = req.params;
	let changedCategory = JSON.stringify(category).replace("[","{").replace("]","}");
	changedCategory.map((item)=>{
		return (item.charAt(0).toUpperCase()+item.slice(1).toLowerCase())
	})
    const blog = await pool.query("SELECT * FROM blog WHERE categories = $1", [
      changedCategory,
    ]);
    res.json(blog.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

// POST A LIKE
router.post("/add-like", async (req, res) => {
  try {
    const { slug } = req.body;
    const addLike = await pool.query(
      `UPDATE blog SET likes = likes + 1 WHERE slug = $1 RETURNING *`,
      [slug]
    );
    res.json(addLike.rows[0]);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
