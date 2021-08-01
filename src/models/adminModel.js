const mongoose = require("mongoose");

const adminModel = mongoose.Schema(
	{
		identity: {
			type: mongoose.Schema.Types.ObjectId,
			require: true,
			ref: "Identities",
		},
	},
	{
		timestamps: true,
	}
);

const Admins = mongoose.model("Admins", adminModel);
module.exports = Admins;
