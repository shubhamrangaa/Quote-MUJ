const express = require("express");
const router = express.Router();
const pool = require("../db.js");
const { customAlphabet } = require("nanoid");

// CREATE BLOG
router.post("/new", async (req, res) => {
  try {
    const {
      categories,
      author,
      heading,
      caption,
      article_data,
      likes,
      images,
    } = req.body;

    // NANO ID LOGIC
    const nanoid = customAlphabet(
      "1234567890abcdefghijklmnopqrstuvqxyzABCDEFGHIJKLMNOPQRSTUVQXYZ",
      5
    );
    let slug = `${heading
      .toLowerCase()
      .split(" ")
      .slice(0, 5)
      .join("-")}-${nanoid()}`;

    // DATE LOGIC
    let date_created = [new Date().toISOString()];

    // ADDING TO DATABASE QUERY
    const newBlog = await pool.query(
      `INSERT INTO 
			blog(slug , author, heading, caption, article_data, date_created, likes, images, categories) 
			VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) 
		  RETURNING *`,
      [
        slug,
        author,
        heading,
        caption,
        article_data,
        date_created,
        likes,
        images,
        categories,
      ]
    );
    // TO ADD TO CATEGORY TABLE
    // categories.forEach((element) => {
    //   pool.query(
    //     `INSERT INTO
    //      categories( name, slug)
    //      VALUES($1, $2)
    //      `,
    //     [element, slug]
    //   );
    // });

    let result = newBlog.rows[0];
    let category = result.categories.startsWith("{")
      ? JSON.parse(result.categories.replace("{", "[").replace("}", "]"))
      : [result.categories];
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
    res.json(
      allBlogs.rows.map((item) => {
        let category = item.categories.startsWith("{")
          ? JSON.parse(item.categories.replace("{", "[").replace("}", "]"))
          : [item.categories];
        return {
          ...item,
          categories: category,
        };
      })
    );
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
    let category = result.categories.startsWith("{")
      ? JSON.parse(result.categories.replace("{", "[").replace("}", "]"))
      : [result.categories];
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
    const blog = await pool.query("SELECT * FROM blog ");
    let filteredBlogs = [];

    // POPULATION filteredBlogs WITH SIMILAR CATEGORY BLOGS
    blog.rows.forEach((element) => {
      const tempCategoryArray = element.categories;
      if (tempCategoryArray.includes(`${category}`)) {
        filteredBlogs.push(element);
      }
    });
    // CLEANING UP CATEGORY FORMAT AND SEND
    res.json(
      filteredBlogs.map((item) => {
        let category = item.categories.startsWith("{")
          ? JSON.parse(item.categories.replace("{", "[").replace("}", "]"))
          : [item.categories];
        return {
          ...item,
          categories: category,
        };
      })
    );
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

// GET A MONTH
router.get("/monthly/:month", async (req, res) => {
  try {
    let { month } = req.params;
    month = month.toLowerCase().substring(0, 3);
    const blog = await pool.query("SELECT * FROM blog ");
    let filteredBlogs = [];

    // POPULATION filteredBlogs WITH MONTH
    blog.rows.forEach((article) => {
      let articleDate = article.date_created
        .toString()
        .substring(4, 7)
        .toLowerCase();
      if (articleDate === month) {
        filteredBlogs.push(article);
      }
    });
    // CLEANING UP CATEGORY FORMAT AND SEND
    res.json(
      filteredBlogs.map((item) => {
        let category = item.categories.startsWith("{")
          ? JSON.parse(item.categories.replace("{", "[").replace("}", "]"))
          : [item.categories];
        return {
          ...item,
          categories: category,
        };
      })
    );
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
