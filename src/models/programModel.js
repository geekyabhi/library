const mongoose = require("mongoose");

const programModel = mongoose.Schema(
	{
		name: {
			type: String,
			unique: true,
			required: true,
		},
		duration: {
			type: Number,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		memberShips: [
			{
				type: mongoose.Schema.Types.ObjectId,
				required: true,
				ref: "MemberShips",
			},
		],
	},
	{
		timestamps: true,
	}
);

const Programs = mongoose.Model("Programs", programModel);

module.exports = Programs;
