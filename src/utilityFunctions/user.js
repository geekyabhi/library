const Users = require("../models/userModel");

const createUser = (identityId) => {
	return new Promise(async (resolve, reject) => {
		try {
			const user = new Users({ identity: identityId });
			const savedUser = await user.save();
			resolve(savedUser);
		} catch (e) {
			reject(e);
		}
	});
};

module.exports = { createUser };
