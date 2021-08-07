const { response } = require("express");
const Identities = require("../models/identityModel");

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

		const identity = new Identities({ name, email, password, role });
		const savedIdentity = await identity.save();
		if (!savedIdentity) {
			return res.status(400).send({
				success: false,
				error: "Not valid data",
			});
		}

		res.status(200).send({
			success: true,
			data: savedIdentity,
		});
	} catch (e) {
		return res.status(500).send({
			success: false,
			error: "Server error",
		});
	}
};

const getOne = async (req, res) => {
	try {
		const { id } = req.params;
		if (!id) {
			return res.status(400).send({
				success: false,
				error: "No id detected",
			});
		}
		const loggedIdentity = req.loggedIdentity;
		if (!loggedIdentity) {
			return res.status(401).send({
				success: false,
				error: "Unauthorized",
			});
		}
		const identity = await Identities.findById(id);
		if (!identity) {
			return res.status(404).send({
				success: false,
				error: "No such identity found",
			});
		}
		if (String(identity._id) !== String(loggedIdentity._id)) {
			return res.status(401).send({
				success: false,
				error: "Unauthorized",
			});
		}
		res.status(200).send({
			success: true,
			data: identity,
		});
	} catch (e) {
		return res.status(e.code).send({
			success: false,
			error: e.error,
		});
	}
};

module.exports = { add, getOne };
