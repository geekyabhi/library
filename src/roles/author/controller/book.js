const Books = require("../../../models/booksModel");

const addBook = async () => {
	try {
		const identity = req.identity;
		if (!identity || identity.role !== "author") {
			return res.status(401).send({
				success: false,
				error: "Please login as author",
			});
		}

		const { name, link, author } = req.body;
		const book = new Books({ name, link, author });
		const savedBook = await book.savedBook();
	} catch (e) {}
};

module.exports = { addBook };
