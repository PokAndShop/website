const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Backend is working!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/inscription.html', (req, res) => {
    // Gérez le processus d'inscription ici
});

app.post('/connexion.html', (req, res) => {
    // Gérez le processus de connexion ici
});

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user'); // Chemin vers votre modèle d'utilisateur


app.use(bodyParser.json());

// Route d'inscription
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Vérifier si l'utilisateur existe déjà
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'L\'utilisateur existe déjà' });
        }

        // Créer un nouvel utilisateur
        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Une erreur est survenue lors de l\'inscription' });
    }
});

// ... autres routes et configuration

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});