const Rest = require("../../ext/rest/rest");
const { HttpStatus, Code } = require("../../ext/rest/http.status");
const { APP_VERSION } = require("../../config/settings");

class HomeAPIView {
	get(req, res) {
		Rest.response(res, Code.HTTP_200_OK, HttpStatus.OK, {
			home: `Welcome API, version ${APP_VERSION}`,
		});
	}

	post(req, res) {
		Rest.response(res, Code.HTTP_200_OK, HttpStatus.OK, {
			home: `Welcome API, version ${APP_VERSION}`,
		});
	}

	put(req, res) {
		Rest.response(res, Code.HTTP_200_OK, HttpStatus.OK, {
			home: `Welcome API, version ${APP_VERSION}`,
		});
	}

	delete(req, res) {
		Rest.response(res, Code.HTTP_200_OK, HttpStatus.OK, {
			home: `Welcome API, version ${APP_VERSION}`,
		});
	}
}

module.exports = HomeAPIView;
