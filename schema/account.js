// Author: PlayerVMachine
// Date: 14 Oct, 2019
// Description: account.js is the schema for a user's account

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema ({
    username: String,
    createdAt: {type: Date, default: Date.now },
    lastActive: Date,
    restrictions: [{restriction: String, earned: Date, expires: Date}],
    bonuses: [{bonus: String, earned: Date, expires: Date}],
    banned: Boolean,
    playerId: ObjectId
});
