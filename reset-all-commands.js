// only run if you want to remove all commands.
// NOTE: there is no script written to automate this procedure for security purposes.

const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js");
const { clientId, guildId, token } = require("./config.json");

const rest = new REST({ version: "10" }).setToken(token);

// for guild based commands
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
	.then(() => console.log("successfully deleted all guild commands!"))
	.catch(console.error);

// for global commands
rest.put(Routes.applicationCommands(clientId), { body: [] })
	.then(() => console.log("successfully deleted all application commands!"))
	.catch(console.error);
