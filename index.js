require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("pino")();

const Rest = require("./app/ext/rest/rest");
const {
	DEFAULT_PORT,
	DEFAULT_HOST,
	ENDPOINT_API,
	INSTALLED_MODULES,
} = require("./app/config/settings");

const fs = require("fs");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

// route definition
app.get("/", (req, res) => {
	Rest.response(res, 200, "OK", {
		home: "Welcome Backend Base, use /api instead",
	});
});

// We add the routes of the registered modules
INSTALLED_MODULES.forEach((module) => {
	if (fs.existsSync(`./app/${module}/urls.routes.js`)) {
		const endpoint = `${ENDPOINT_API}/${module}`;
		const routes = require(`./app/${module}/urls.routes.js`);

		logger.info(`loading route: ${endpoint}`);

		app.use(endpoint, routes);
	} else {
		logger.error(
			`Module ${module}, does not contain the file urls.routes.js`
		);
	}
});

app.use((req, res, next) => {
	const err = new Error("Route not found");
	err.status = 404;
	logger.error(err);

	Rest.response(res, 200, "OK", "Route not found, use /api instead");
});

app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.send({
		error: {
			message: err.message,
			status: err.status,
		},
	});
});

app.listen(DEFAULT_PORT, DEFAULT_HOST, () => {
	logger.info(`Server is running on port ${DEFAULT_PORT}`);
});
