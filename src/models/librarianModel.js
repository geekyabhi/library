const mongoose = require("mongoose");

const LibrarianSchema = mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			require: true,
			unique: true,
		},
		password: {
			type: String,
			require: true,
		},
		role: {
			type: String,
			enum: ["admin,librarian,visitor,user"],
			required: true,
		},
		description: {
			type: String,
		},
		section: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Section",
		},
	},
	{
		timestamps: true,
	}
);

const Librarian = mongoose.model("Librarian", LibrarianSchema);

module.exports = Librarian;
