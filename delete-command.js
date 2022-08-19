// only run if you want to remove a command(s).
// NOTE: there is no script written to automate this procedure for security purposes.

const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js");
const { clientId, guildId, token } = require("./config.json");

const rest = new REST({ version: "10" }).setToken(token);

// for guild based commands
rest.delete(Routes.applicationGuildCommand(clientId, guildId, "commandId"))
	.then(() => console.log("Successfully deleted guild command"))
	.catch(console.error);

// for global commands
rest.delete(Routes.applicationCommand(clientId, "commandId"))
	.then(() => console.log("Successfully deleted application command"))
	.catch(console.error);
