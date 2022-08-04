//creating a command with a button
//makes a button message, but it doesnt do anything yet
//reacting to the button requires a collector of some sort to pick up your reaction to the button
//you can put the collector directly into this file
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, ComponentType } = require('discord.js');

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
        //had to do the const message to define the variable message. also had to set up fetch reply to put in the variable the message that the button is on
        const message = await interaction.reply({ content: 'Hello!', components: [row], fetchReply: true });

        //moving collector here
        //collector works
        const collector = message.createMessageComponentCollector({ ComponentType: ComponentType.Button, time: 15000 });

        collector.on('collect', i => {
            if(i.user.id === interaction.user.id) {
                i.reply(`${i.member.nickname} clicked on the ${i.customId} button.`);
            } else {
                i.reply({ content: `These buttons aren't for you!`, ephemeral: true });
            }

        });

        collector.on('end', collected => {
            console.log(`Collected ${collected.size} interactions.`);
        })
    },
    
};