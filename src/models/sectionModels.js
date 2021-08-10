const mongoose = require("mongoose");

const sectionModel = mongoose.Schema(
	{
		name: {
			type: String,
			unique: true,
			required: true,
		},
		books: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Books",
				required: true,
			},
		],
		librarian: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Librarians",
				required: true,
			},
		],
	},
	{
		timestamps: true,
	}
);

const Sections = mongoose.Model("Sections", sectionModel);

module.exports = Sections;
