const Librarians = require("../models/librarianModel");

const createLibrarian = (identityId) => {
	return new Promise(async (resolve, reject) => {
		try {
			const librarian = new Librarians({ identity: identityId });
			const savedLibrarian = await librarian.save();
			resolve(savedLibrarian);
		} catch (e) {
			reject(e);
		}
	});
};

module.exports = { createLibrarian };
