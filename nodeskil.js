const { Command } = require("commander");
const fs = require("fs-extra");
const path = require("path");

const program = new Command();

program
	.version("1.0.0")
	.description(
		"Command to create a basic module with routes and views for a REST API in NodeSkil"
	)
	.arguments("<nameModule>")
	.action((nameModule) => {
		// Base directory for the new module
		const directoryModule = path.join(__dirname, "app", nameModule);

		// Create the module directory
		fs.ensureDirSync(directoryModule);

		// Create urls.routes.js file
		const fileRoutes = path.join(directoryModule, "urls.routes.js");
		fs.writeFileSync(
			fileRoutes,
			"// This file contains the paths for the module"
		);

		// Create views folder
		const directoryViews = path.join(directoryModule, "views");
		fs.ensureDirSync(directoryViews);

		// Create view.js file in views folder
		const fileView = path.join(directoryViews, `${nameModule}.view.js`);
		fs.writeFileSync(fileView, "// This file is the view of the module");

		console.log(`Module "${nameModule}" created successfully.`);
	});

program.parse(process.argv);
