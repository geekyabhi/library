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
		section: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Sections",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Books = mongoose.Model("Books", bookModel);

module.exports = Books;
