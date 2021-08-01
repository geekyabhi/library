const mongoose = require("mongoose");

const userModel = mongoose.Schema(
	{
		identity: {
			type: mongoose.Schema.Types.ObjectId,
			require: true,
			ref: "Identities",
		},
		memberShip: {
			type: mongoose.Schema.Types.ObjectId,
			require: true,
			ref: "Memberships",
		},
	},
	{
		timestamps: true,
	}
);

const Users = mongoose.model("Users", userModel);
module.exports = Users;
