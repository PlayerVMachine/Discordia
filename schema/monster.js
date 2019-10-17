// Author: PlayerVMachine
// Date: 14 Oct, 2019
// Description: monster.js is the schema for a monster players can encounter

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monsterSchema = new Schema ({
    name: String,
    serverId: String,
    channelId: String,
    unique: Boolean,
    level: Number,
    baseHealth: Number,
    baseArmor: Number,
    baseDamage: Number,
    multiplier: Number,
    xpReward: Number,
    itemRewards: [{item: String, rarity: Number}]
});

