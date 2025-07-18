const express = require('express')
const router = express.Router()
const db = require('../data/db')
const bcrypt = require('bcrypt')

//register

//post users
router.post('/register', async (req, res) => {
    const { name, prenom, email, password, } = req.body;

    if (!name || !prenom || !email || !password) {
        return res.status(400).json({ message: 'Champs manquants' });

    }
    const cryptpassword = await bcrypt.hash(password, 10)
    const role = 'client'

    const sql = 'INSERT INTO users (name,prenom, email, password,role) VALUES (?, ?, ? ,? ,?)';
    db.query(sql, [name, prenom, email, cryptpassword, role], (err, result) => {
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
router.post('/login', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(401).json({ message: 'problem de data !' })
    }
    const sql = 'SELECT * FROM users WHERE email = ?'
    db.query(sql, [email], async (err, result) => {
        if (err) return res.status(500).json(err)
        const user = result[0]
        const isEqual = await bcrypt.compare(password, user.password)
        res.send(isEqual)
    })
})


module.exports = router
