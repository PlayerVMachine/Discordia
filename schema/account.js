// Author: PlayerVMachine
// Date: 14 Oct, 2019
// Description: account.js is the schema for a user's account

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema ({
    userId: String,
    createdAt: {type: Date, default: Date.now },
    lastActive: Date,
    restrictions: [{restriction: String, earned: Date, expires: Date}],
    bonuses: [{bonus: String, earned: Date, expires: Date}],
    banned: Boolean,
    playerId: ObjectId //Account is created first so the link likely doesn't work this way
});

accountSchema.methods.updateActivity = function (userId) {
    //find userid update lastActive to Date.now
}

accountSchema.methods.restrict = function(userId, restriction, expiry) {
    let userDoc = this.model(`Account`).find({userId: userId});
    //add a restriction
}

accountSchema.methods.unrestrict = function(userId, restriction) {
    //find userId and remove restriction from array
}

accountSchema.methods.addBonus = function (UserId, bonus, expiry) {
    //find userId and add bonus
}

accountSchema.methods.remBonus = function (userId, bonus) {
    //find userId and remove bonus
}

accountSchema.methods.ban = function (userId) {
    //find userId and set ban = true
}

accountSchema.methods.unBan = function (userId) {
    //find userId and set ban = false
}


