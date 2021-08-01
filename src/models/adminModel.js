const mongoose = require("mongoose");

const adminModel = mongoose.Schema(
	{
		identity: {
			type: mongoose.Schema.Types.ObjectId,
			require: true,
			ref: "Identity",
		},
	},
	{
		timestamp: true,
	}
);

const Admin = mongoose.model("Admin", adminModel);
module.exports = Admin;
