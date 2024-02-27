class Rest {
	constructor(res) {
		this.res = res;
	}

	static response(
		res,
		status = 200,
		message = "OK",
		data = null,
		errors = null
	) {
		var json_resp = {
			status: status,
			message: message,
			data: data,
		};

		if (errors !== undefined && errors !== null) {
			json_resp["errors"] = errors;
		}

		res.status(status).json(json_resp);
	}
}

module.exports = Rest;
