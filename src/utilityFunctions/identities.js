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
			console.log(e);
			reject({ code: 500, error: e._message });
		}
	});
};

const getIdentity = (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!id) {
				reject({ code: 400, error: "No id detected" });
			}
			const identity = await Identities.findById(id);
			if (!identity) {
				reject({ code: 404, error: "No such identity found" });
			}
			resolve({ identity: identity });
		} catch (e) {
			console.log(e);
			reject({ code: 500, error: e });
		}
	});
};

module.exports = { addIdentity, getIdentity };
