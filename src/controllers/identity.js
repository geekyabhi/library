const Identities = require("../models/identityModel");
const { addIdentity } = require("../utilityFunctions/identities");

const add = async (req, res) => {
	try {
		const { name, email, password, role } = req.body;
		const alreadyExist = await Identities.findOne({ email: email });
		if (alreadyExist) {
			return res.status(400).send({
				success: false,
				error: "Email already exist",
			});
		}
		const { savedIdentity } = await addIdentity(
			name,
			email,
			password,
			role
		);
		res.status(200).send({
			success: true,
			data: savedIdentity,
		});
	} catch (e) {
		return res.status(e.code).send({
			success: false,
			error: e.error,
		});
	}
};

module.exports = { add };
