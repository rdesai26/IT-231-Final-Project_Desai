"use strict"

const mongoose = require("mongoose"),
subscriberSchema = mongoose.Schema({
    name: String,
    email: String,
    questionsComments: String,
    receiveEmails: String
});

module.exports = mongoose.model("Subscriber", subscriberSchema);