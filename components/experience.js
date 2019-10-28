// Experience System
// Use placeholder numbers then hide the actual numbers in a secret file
//


class XPTracker {
    constructor (bot, global, channel) {
        this.bot = bot
        this.global = global
        this.channel = channel
    }

    //This function should be called by
    gainXP (message) {
        let base = 50
        let channelBonus = 0
        let fatigue = 0
        let gameEventBonus = 1

        //Calculate player XP
        if (!global)
            channelBonus = 10

        //get fatigue from player schema

        //get game event from game schema

        let gain = base + channelBonus * gameEventBonus * fatigue

        //add gain to player xp
        //check if player levelled up
        //if so ding level up
    }
}

export default XPTracker
