const { axios } = require("axios");

export default async function handler(req, res) {
	try{
		const data = await axios.post('https://quote-muj.herokuapp.com/api/blogs/new' ,req.body)
		res.status(200).json(data)
	}
	catch (error) {
		console.error(error)
		return res.status(error.status || 500).end(error.message)
	}
}