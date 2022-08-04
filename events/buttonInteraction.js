//listening for when someone clicks on the button i made earleir
const { ComponentType } = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    once: false,
    execute(interaction, message) {
        //im gonna use an awaitmessagecomponent instead of a collector
        const filter = i => {
            i.deferUpdate();
            return i.user.id === interaction.user.id;
        };

        message.awaitMessageComponent({ filter, ComponentType: ComponentType.Button, time: 60000 })
            .then(interaction => interaction.editReply('You\'ve clicked the button'))
            .catch(err => console.log('No interactions were collected.'));

    },
};