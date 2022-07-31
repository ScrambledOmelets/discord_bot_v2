//this is the basic setup for all slash commands
//you would put the code for different actions in the "async execute" function
//module.exports alows you to export data so you can require() it in other files

const { SlashCommandBuilder } = require('discord.js');
//if you need access to different things, require() them here at the top

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('replies with pong!'),
    async execute(interaction) {
        //code goes here
        await interaction.reply('Pong!');
        //await wait(60); //doesnt work, idk why
        await interaction.editReply(`If you thought I was going to say "Pong!", you're highly mistaken, ${interaction.user.tag}.`)
        await interaction.deleteReply();
        //await interaction.followUp('Pong again >:)'); //double replies
    },
};

//changed from an await in line 14 to a return