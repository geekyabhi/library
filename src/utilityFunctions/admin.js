const Admins = require("../models/adminModel");

const createAdmin = (identityId) => {
	return new Promise(async (resolve, reject) => {
		try {
			const admin = new Admins({ identity: identityId });
			const savedAdmin = await admin.save();
			resolve(savedAdmin);
		} catch (e) {
			reject(e);
		}
	});
};

module.exports = { createAdmin };
