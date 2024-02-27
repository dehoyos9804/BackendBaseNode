const Sequelize = require("sequelize");

const config = {
	POSTGRESQL: {
		NAME: process.env.DB_NAME || "default",
		USER: process.env.DB_USER || "default",
		PASSWORD: process.env.DB_PASSWORD || "default",
		HOST: process.env.DB_HOST || "default",
		PORT: process.env.DB_PORT || "default",
	},
	MYSQL: {
		NAME: process.env.DB_NAME,
		USER: process.env.DB_USER,
		PASSWORD: process.env.DB_PASSWORD,
		HOST: process.env.DB_HOST,
		PORT: process.env.DB_PORT,
	},
	MARIABD: {
		NAME: process.env.DB_NAME,
		USER: process.env.DB_USER,
		PASSWORD: process.env.DB_PASSWORD,
		HOST: process.env.DB_HOST,
		PORT: process.env.DB_PORT,
	},
};

const customServer = {
	POSTGRESQL: `postgresql://${config.POSTGRESQL.USER}:${config.POSTGRESQL.PASSWORD}@${config.POSTGRESQL.HOST}:${config.POSTGRESQL.PORT}/${config.POSTGRESQL.NAME}`,
	MYSQL: `mysql://${config.POSTGRESQL.USER}:${config.POSTGRESQL.PASSWORD}@${config.POSTGRESQL.HOST}:${config.POSTGRESQL.PORT}/${config.POSTGRESQL.NAME}`,
	MARIADB: `mysql://${config.POSTGRESQL.USER}:${config.POSTGRESQL.PASSWORD}@${config.POSTGRESQL.HOST}:${config.POSTGRESQL.PORT}/${config.POSTGRESQL.NAME}`,
	SQLITE: "sqlite:///:memory:",
};

let db = null;
const allowedValues = ["POSTGRESQL", "MYSQL", "MARIADB", "SQLITE"];

function getSequelizeInstance(custom) {
	if (
		(custom !== null) &
		(custom !== undefined) &
		(typeof custom === "string")
	) {
		if (allowedValues.includes(custom)) {
			db = new Sequelize(customServer[custom], {});
		}
	}

	return db;
}

module.exports = getSequelizeInstance;
