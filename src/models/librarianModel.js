const mongoose = require("mongoose");

const librarianModel = mongoose.Schema(
	{
		identity: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Identities",
		},
		sections: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Sections",
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
