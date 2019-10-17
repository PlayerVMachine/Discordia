// Author: PlayerVMachine
// Date: 14 Oct, 2019
// Description: region.js is the schema for a region in the game

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regionSchema = new Schema ({
    name: String,
    factions: [{faction: ObjectId}],
    towns: [{town: ObjectId}],
    races: [{race: ObjectId}],
    population: Number,
    area: Number,
    capital: ObjectId,
    description: String
});

