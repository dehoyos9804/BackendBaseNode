const APP_VERSION = "1.1.0";

const DEFAULT_HOST = "0.0.0.0";
const DEFAULT_PORT = process.env.PORT || 8080;
const DEBUG = false;

const APP_PATH = "app";
const ENDPOINT_API = "/api";

const INSTALLED_MODULES = ["home"];

module.exports = {
	APP_VERSION,
	DEFAULT_HOST,
	DEFAULT_PORT,
	DEBUG,
	APP_PATH,
	ENDPOINT_API,
	INSTALLED_MODULES,
};
