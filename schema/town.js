// Author: PlayerVMachine
// Date: 14 Oct, 2019
// Description: town.js is the schema for a town channel

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const townSchema = new Schema ({
    serverId: String,
    channelId: String,
    name: String,
    region: String,
    facation: ObjectId,
    shops: [{shop: ObjectId}],
    npcs: [{npc: ObjectId}]
});
