const express = require('express')
const router = express.Router()
const db = require('../data/db')
const bcrypt = require('bcrypt')

//register

//post users
router.post('/register', async (req, res) => {
    const { name, prenom, tele, email, password, } = req.body;

    if (!name || !prenom || !tele || !email || !password) {
        return res.status(400).json({ message: 'Champs manquants' });

    }
    const cryptpassword = await bcrypt.hash(password, 10)
    const role = 'client'

    const sql = 'INSERT INTO users (name,prenom,tele, email, password,role) VALUES (?, ?, ? ,? ,?,?)';
    db.query(sql, [name, prenom, tele, email, cryptpassword, role], (err, result) => {
        if (err) return res.status(500).json({ message: 'Erreur serveur' });

        res.status(201).json({
            message: 'Utilisateur ajouté avec succès',
            id: result.insertId,
            name,
            prenom

        });
    });
});
//logine
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email et mot de passe requis' });
    }

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], async (err, result) => {
        if (err) {
            console.error("Erreur serveur :", err);
            return res.status(500).json({ message: 'Erreur serveur' });
        }

        // ✅ Vérifier si l'utilisateur existe
        if (result.length === 0) {
            return res.status(401).json({ message: 'Email incorrect ou non enregistré' });
        }

        const user = result[0];

        // ✅ Vérifier le mot de passe
        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        // ✅ Succès de la connexion
        res.status(200).json({
            id: user.id,
            name: user.name,
            prenom: user.prenom,
            tele: user.tele,
            email: user.email,
            role: user.role
        });
    });
});


module.exports = router
