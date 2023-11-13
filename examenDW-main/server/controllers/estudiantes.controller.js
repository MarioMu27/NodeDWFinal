require('../models/db');
const estudiante = require('../models/extudiante')
const pago = require('../models/pago')

const ListarEstudiantes = async(req, res) => {
    try {
        const estudiantes = await estudiante.find();
        res.render('estudiantes', { title: "Listado de Estudiantes", estudiantes });
    } catch (error) {
        console.log(error);
        res.json({ message: "Algo ha ocurrido" });
    }
};

const ListarPagoEstudiante = async(req,res) =>{
    const {carnet} = req.params; 
    try {
            const pagos = await pago.find({'estudiantecarnet':carnet});

            res.render('PagosEstudiante', {title: "Pagos por Estudiante", pagos})
    } catch (error) {
        console.log(error);
        res.json({"message": "Algo salio mal..."}); 
    }
}

const ListarEstudiante = async(req, res) => {
    const {carnet} = req.params;
    try{
        const datos = await estudiante.find({'carnet':carnet})

        res.render('agregarPago', {title: "Nuevo pago", datos})
    } catch(error){
        console.log(error)
        res.json({"message": "Algo salio mal..."});
    }
}

const Home = async(req, res) => {
    res.render('home', { title: "Listado de Estudiantes" });
}

const AgregarPago = async(req, res) => {
    try {
        await pago.insertMany([{
            "estudiantecarnet":"12451", 
            "total":750, 
            "meses":3, 
            "tipo":"Efectivo"
        }]); 
        res.render('home', { title: "Listado de Estudiantes" });
    } catch (error) {
        console.log('err', + error); 
    }
}


module.exports = {
    ListarEstudiantes,
    Home, 
    ListarPagoEstudiante, 
    ListarEstudiante, 
    AgregarPago
}
