// Create Menus and get user input
//
// accept a list of options, auto page if there are are more than 8 options
//
// yes or no menus
//
// Submenus

const f = require(`util`).format


class Menu {
    constructor(client, channel, user, type) {
        this.bot = client
        this.channel = channel
        this.user = user
        this.type = type
    }

    //static functions are called like Menu.makeMenuText
    //methods are called using an instance of Menu

    get bot {
        return this.bot
    }

    get channel {
        return this.channel
    }

    get user {
        return this.user
    }

    async yesno(question) {
        let message this.bot.createMessage
    }

}


const menuText = (type, list, description) => {
    if (`list` == type) {
        let options = ``
        let menu = []
        if (9 > list.length) {
            list.forEach((item, index) => {
                options += f(`[%s] %s\n`, index, item)
            })
            menu.push(f(`\`\`\`ini\n%s\n%s\`\`\``, description, options))
        } else {
            for (i = 0; i < (list.length % 7) -1; i++) {
                options = ``
                list.slice(i*7, (i*7) + 7).forEach((item, index) => {
                    options += f(`[%s] %s\n`, index + 1, item)
                })
                if (i > 0) {
                    options += `[8] Previous\n`
                }
                options += `[9] Next\n`

                menu.push(f(`\`\`\`ini\n%s\n%s\`\`\``, description, options))
            }
        }
        return menu
    } else if (`yn` == type) {
        return f(`%s [Y]es/[N]o`, description)
    }
}

console.log(menuText("list", "abcdefghijklmnopqrstuvwxyz".split(""), "What a menu"))
console.log(menuText(`yn`, ``, `Steve?`))

const listMenu = (message, list, description) => {

}
