// Author: PlayerVMachine
// Date: 14 Oct, 2019
// Description: player.js is the schema for a user's character

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema ({
    race: String,
    faction: String,
    specialization: String,
    level: Number,
    experience: Number,
    maxHealth: Number,
    curHealth: Number,
    maxEnergy: Number,
    curEnergy: Number,
    character: {
        headgear: String,
        head: String,
        eyes: String,
        torso: String,
        legs: String,
        feet: String,
        mainhand: String,
        offhand: String,
        pet: String,
        special: String
    },
    skills: {
        type: Map,
        of: String
    },
    abilities: {
        type: Map,
        of: String
    },
    equipped: {
        mainhand: String,
        offhand: String,
        armor: [{kind: String, maxHitPoints: Number, curHitPoints: Number, special: Number}],
        bacpack: {kind: String, maxCapacity: Number, curCapacity: Number, full: Boolean}
    },
    inventory: {
        type: Map,
        of String
    }
});
