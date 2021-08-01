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
			enum: ["admin", "librarian", "author", "user"],
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Identities = mongoose.model("Identities", IdentitySchema);

module.exports = Identities;
