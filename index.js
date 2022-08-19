// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Creating a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('pong!');
	}
	else if (commandName === 'server') {
		await interaction.reply(`**Server Name:** ${interaction.guild.name}\n**Total members:** ${interaction.guild.memberCount}\n**Server creation date:** ${interaction.guild.createdAt}\n**Server Verification Level:** ${interaction.guild.verificationLevel}`);
	}
	else if (commandName === 'user') {
		await interaction.reply(`User tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});

// Login to Discord with your client's token
client.login(token);
