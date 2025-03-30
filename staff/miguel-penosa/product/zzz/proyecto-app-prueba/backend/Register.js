const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Suponiendo que tienes un modelo User

const router = express.Router();

// Ruta para registrar un usuario
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Validar los datos (muy básico)
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    try {
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
        }

        // Cifrar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear un nuevo usuario
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Guardar el usuario en la base de datos
        await newUser.save();

        // Enviar respuesta
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

module.exports = router;