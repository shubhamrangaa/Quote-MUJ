const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
	res.json({
		status:"Working 🚀"
	})
})

module.exports = router;