const bot = require(`./bot.js`)


bot.on(`messageCreate`, (message) => {
    if (`d!ping` == message.content) {
        bot.createMessage(message.channel.id, `Pong!`)
    }
})

