const express = require("express");
const routers = express.Router();
const Rest = require("../ext/rest/rest");
const { APP_VERSION } = require("../config/settings");

//Definir rutas del módulo
routers.get("", (req, res) => {
	Rest.response(res, 200, "OK", {
		home: `Welcome API, version ${APP_VERSION}`,
	});
});

module.exports = routers;
