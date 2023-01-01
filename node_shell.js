const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'b3d23f6f-8b6f-4634-8e01-aeea9aad49cd'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
