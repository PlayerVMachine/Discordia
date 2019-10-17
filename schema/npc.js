// Author: PlayerVMachine
// Date: 14 Oct, 2019
// Description: npc.js is the schema for a non-player character

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const npcSchema = new Schema ({
    name: String,
    town: ObjectId,

});

