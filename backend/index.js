const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/estudiantes', (req, res) => {
    const { codigoEstudiante, nombres, nota1, nota2, nota3, nota4 } = req.body;

    
    const suma = nota1 + nota2 + nota3 + nota4;

    
    const promedio = suma / 4;
    
    
    const estado = promedio >= 13 ? 'Aprobado' : 'Desaprobado';

    
    let observacion = '';
    if (promedio >= 17) {
        observacion = 'Excelente';
    } else if (promedio >= 13 && promedio < 17) { 
        observacion = 'Regular';
    } else {
        observacion = 'En riesgo'; 
    }


    res.json({
        codigoEstudiante,
        nombres,
        nota1,
        nota2,
        nota3,
        nota4,
        suma,
        promedio,
        estado,
        observacion
    });
});

app.listen(PORT, () => {
    console.log(`¡Servidor de Node.js corriendo en http://localhost:${PORT}! 🚀`);
});