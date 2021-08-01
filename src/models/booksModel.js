const mongoose = require("mongoose");

const bookModel = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Author",
		},
	},
	{
		timestamps: true,
	}
);

const Books = mongoose.Model("Books", bookModel);

module.exports = Books;
