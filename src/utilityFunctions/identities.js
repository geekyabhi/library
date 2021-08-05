const Identities = require("../models/identityModel");

const addIdentity = (name, email, password, role) => {
	return new Promise(async (resolve, reject) => {
		try {
			const identity = new Identities({ name, email, password, role });
			const savedIdentity = await identity.save();
			if (!savedIdentity) {
				reject({ code: 400, error: "Enter valid entries" });
			}
			resolve({ savedIdentity: savedIdentity });
		} catch (e) {
			reject({ code: 500, error: "Server error" });
		}
	});
};

module.exports = { addIdentity };
