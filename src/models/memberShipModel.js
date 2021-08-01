const mongoose = require("mongoose");

const memberShipModel = mongoose.Schema(
	{
		memberShipProgram: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Programs",
		},
		dateOfStart: {
			type: Date,
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Users",
		},
	},
	{
		timestamps: true,
	}
);

const MemberShips = mongoose.model("MemberShips", memberShipModel);
module.exports = MemberShips;
