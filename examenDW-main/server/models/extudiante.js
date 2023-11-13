
const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
    nombres:{
        type:String,
        required: true
    },
    apellidos:{
        type:String,
        required: true
    },
    carnet:{
        type:String,
        required: true
    }, 
    grado:{
        type:String, 
        required:true
    }, 
    cuota:{
        type:Number, 
        required: true
    }
});

module.exports = mongoose.model('estudiante', estudianteSchema); 