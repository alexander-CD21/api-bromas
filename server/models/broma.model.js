const mongoose = require ("mongoose");

const BromaSchema = new mongoose.Schema( {
    text:String,
    
});

const Broma = mongoose.model("Broma",BromaSchema);

module.exports = Broma;