const express = require("express");
const router = express.Router();
const pool = require("../db.js");
const { customAlphabet } = require("nanoid");

// CREATE BLOG
router.post("/new", async (req, res) => {
  try {
    const { categories, author, heading, caption, article_data, likes } =
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
      ]
    );
    res.json(newBlog.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

// READ/SHOW ALL BLOGS
router.get("/all", async (req, res) => {
  try {
    const allBlogs = await pool.query("SELECT * FROM blog");
    res.json(allBlogs.rows);
  } catch (err) {
    console.error(err);
  }
});

// GET A SINGLE BLOG
router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await pool.query("SELECT * FROM blog WHERE slug = $1", [slug]);
    res.json(blog.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

// GET A CATEGORY
router.get("/categories/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const blog = await pool.query("SELECT * FROM blog WHERE categories = $1", [
      category,
    ]);
    res.json(blog.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
