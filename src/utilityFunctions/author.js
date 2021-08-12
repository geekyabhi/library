const Authors = require("../models/authorModel");

const createAuthor = (identityId) => {
	return new Promise(async (resolve, reject) => {
		try {
			const author = new Authors({ identity: identityId });
			const savedAuthor = await author.save();
			resolve(savedAuthor);
		} catch (e) {
			reject(e);
		}
	});
};

module.exports = { createAuthor };
