//displays list of commands
const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('commands')
        .setDescription('sends a list of commans'),
    async execute(interaction) {
        await interaction.reply('filler text');
        const commandEmbed = new EmbedBuilder()
            .setColor('Blurple')
            .setTitle('List of Commands')
            .setDescription(`\/ping - silly ping command (basic bot moment) \n 
                            \/button - sends a button (does not work currently) \n
                            \/embed - sends an embed message like this one \n
                            \/commands - this command`)
        interaction.channel.send({ embeds: [commandEmbed] });
    },
};