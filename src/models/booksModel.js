const mongoose = require("mongoose");

const bookModel = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		link: {
			type: String,
			required: true,
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Authors",
		},
		section: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Sections",
		},
	},
	{
		timestamps: true,
	}
);

const Books = mongoose.Model("Books", bookModel);

module.exports = Books;
