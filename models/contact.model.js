const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    nom: String,
    telephone: Number,
    mail: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Contact', ContactSchema);