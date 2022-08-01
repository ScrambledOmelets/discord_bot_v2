
//this doesnt work for some reason
//it didnt work because of intents and permissions issues from discord developer portal website
//code is written just fine
//when i write an event file like this, it doesnt need to have anything special for any parameters it has

module.exports = {
    name: 'messageCreate',
    once: false,
    execute(message) {
        if (message.content == 'left') {
		message.channel.send('right');
        } else if (message.content.toLowerCase() == 'i hate you') {
            message.channel.send(`I hate you too, you meanie :P`);
        }
    },
};
