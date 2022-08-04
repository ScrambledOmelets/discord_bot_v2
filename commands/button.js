//creating a command with a button
//makes a button message, but it doesnt do anything yet
//reacting to the button requires an event listener for the button being clicked
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('sends a message with a button in it.'),
    async execute(interaction) {
        //building the button thing here i guess
        const row = new ActionRowBuilder()
            .addComponents(
                    new ButtonBuilder()
                    .setCustomId('primary')
                    .setLabel('Click me!')
                    .setStyle(ButtonStyle.Primary),
            );
        //the actual reply
        await interaction.reply({ content: 'Hello!', components: [row] });
    },
    
};