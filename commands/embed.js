//same layout as ping command exept it has a embed thing
const { SlashCommandBuilder, channelLink } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('sends an embed with some stuff in it'),
    async execute(interaction) {
        //just putting embed stuff here
        await interaction.reply('here\'s your embed!');
        const myEmbed = new EmbedBuilder()
            .setColor('0x820263')
            .setTitle('Very Fancy Title')
            .setDescription('hopefully this is some very nice embed text.')
            //.setAuthor('scrambled') always has a stroke for some reason
        
        interaction.channel.send({ embeds: [myEmbed] });

    },
};