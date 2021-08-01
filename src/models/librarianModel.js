const mongoose = require("mongoose");

const librarianModel = mongoose.Schema(
	{
		identity: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Identity",
		},
		sections: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Section",
				required: true,
			},
		],
	},
	{
		timestamps: true,
	}
);

const Librarians = mongoose.Model("Librarians", librarianModel);

module.exports = Librarians;
