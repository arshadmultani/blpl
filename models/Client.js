const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name:String,
    mobileNo:String,
    message: String,
    loanamount:String,
    emailId:String,

});

module.exports = mongoose.model('Client', ClientSchema);
