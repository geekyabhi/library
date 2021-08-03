const mongoose = require("mongoose");
require("dotenv").config({ path: "./configuration/dev.env" });
const connectDB = async () => {
	return new Promise(async (resolve, reject) => {
		try {
			const conn = await mongoose.connect(process.env.MONGODB_URI, {
				useUnifiedTopology: true,
				useFindAndModify: true,
				useNewUrlParser: true,
				useCreateIndex: true,
			});
			// console.log(
			// 	`Mongodb connected at ${conn.connection.host}`.cyan.bold
			// );
			resolve(conn);
		} catch (e) {
			// console.log("MongoDB cannot be connected : ", e);
			reject(e);
			// process.exit(1);
		}
	});
};

module.exports = connectDB;
