const express = require('express'); 
const router = express.Router(); 
const { ListarEstudiantes, Home, ListarPagoEstudiante, ListarEstudiante, AgregarPago} = require('../controllers/estudiantes.controller');

router.get('/', Home);
router.get('/estudiantes', ListarEstudiantes);
router.get('/pagos/:carnet', ListarPagoEstudiante)
router.get('/Nuevopago/:carnet', ListarEstudiante)
router.get('/AgregarPago', AgregarPago)

// Corrección en la siguiente línea
module.exports = router;
