const mongoose = require('mongoose');

const pagoSchema = new mongoose.Schema({
    estudiantecarnet:{
        type:String,
        required: true
    },
    total:{
        type:Number,
        required: true
    },
    meses:{
        type:Number,
        required: true
    }, 
    tipo:{
        type:String, 
        required:true 
    }
});

module.exports = mongoose.model('pago', pagoSchema); 