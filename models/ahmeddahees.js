const mongoose = require("mongoose");

const { Schema } = mongoose;







const imgs = new Schema({
    title: String,
    photo: String,
    data: String,

});





const good = new Schema({
    firstname: String,
    lastname: String,
    country: String,
    subject: String,

});
const contacts = mongoose.model('contacts', good);
module.exports = contacts;





const dahees = mongoose.model('Dahees', imgs);
module.exports = dahees;