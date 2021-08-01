const mongoose = require("mongoose");

const authorModel = mongoose.Schema(
	{
		identity: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Identities",
		},
		booksPublished: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Books",
			},
		],
	},
	{
		timestamps: true,
	}
);

const Authors = mongoose.Model("Authors", authorModel);

module.exports = Authors;
