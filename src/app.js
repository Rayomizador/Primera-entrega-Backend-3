const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const mocksRouter = require('./routes/mocks.router');
const userModel = require('./models/User');
const petModel = require('./models/Pet');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/coderhouse';

app.use(express.json());

// Conexión a MongoDB
mongoose.connect(MONGO_URL)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

// Rutas
app.use('/api/mocks', mocksRouter);

// Servicios GET básicos para comprobación
app.get('/api/users', async (req, res) => {
    const users = await userModel.find();
    res.send({ status: "success", payload: users });
});

app.get('/api/pets', async (req, res) => {
    const pets = await petModel.find();
    res.send({ status: "success", payload: pets });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

module.exports = app;
