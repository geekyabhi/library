const mongoose = require("mongoose");

const IdentitySchema = mongoose.Schema(
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
			enum: ["admin", "librarian", "author", "Identity"],
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Identity = mongoose.model("Identity", IdentitySchema);

module.exports = Identity;
