const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
		roleObject: {
			type: Object,
		},
	},
	{
		timestamps: true,
	}
);

IdentitySchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

IdentitySchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

const Identities = mongoose.model("Identities", IdentitySchema);

module.exports = Identities;
