const Eris = require(`eris`);

const config = require(`./config.json`)

const bot = new Eris.Client(config.BOT_TOKEN, {
    messageLimit: 20,
    defaultImageSize:256,
    restMode: true
});

//ready
bot.on(`ready`, () => {
    console.log(`Weclome to Discordia!`);
});


bot.on(`messageCreate`, (message) => {
    if (`d!ping` == message) {
        bot.createMessage(message.channel.id, `Pong!`);
    }
});

//Go online
bot.connect();
