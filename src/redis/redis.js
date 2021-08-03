const redis = require("redis");

let REDIS_PORT;

if (process.env.REDIS_HOST) {
	REDIS_PORT = {
		host: process.env.REDIS_HOST,
		port: process.env.REDIS_PORT,
		password: process.env.REDIS_PASSWORD,
	};
} else {
	REDIS_PORT = "http://127.0.0.1:6379";
}

const redisClient = redis.createClient(REDIS_PORT);
if (redisClient) {
	console.log(`Redis running on port ${REDIS_PORT}`.magenta);
}
module.exports = redisClient;
