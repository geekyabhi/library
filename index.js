const express = require("express");
const connectDB = require("./src/db/mongoose");
require("dotenv").config({ path: "./dev.env" });
require("colors");
const app = express();
require("./src/redis/redis");
connectDB()
	.then((conn) => {
		console.log(`Mongodb connected at ${conn.connection.host}`.cyan.bold);
	})
	.catch((e) => {
		console.log("MongoDB cannot be connected : ", e);
		process.exit(1);
	});

const PORT = 5000;
app.use(express.json());
const identityRouter = require("./src/routes/identity");
app.use("/api/identity", identityRouter);

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`.yellow);
});
