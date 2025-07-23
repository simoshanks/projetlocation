const express = require('express')
const router = express.Router()
const db = require('../data/db')

//amenez toutes reservation
router.get('/', (req, res) => {
    db.query('SELECT * FROM reservation', (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des reservations :', err);
            return res.status(500).json({ message: 'Erreur serveur' });
        }
        res.json(results);
    });
});
//post la reservation
router.post('/', (req, res) => {
    const { userid, voitureid, date_debut, date_fin, statut } = req.body;

    if (!userid || !voitureid || !date_debut || !date_fin) {
        return res.status(400).json({ message: 'Champs obligatoires manquants' });
    }

    const sql = `
    INSERT INTO reservation (userid, voitureid, date_debut, date_fin, statut)
    VALUES (?, ?, ?, ?, ?)
  `;

    db.query(sql, [userid, voitureid, date_debut, date_fin, statut || 'en attente'], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout de la réservation:', err);
            return res.status(500).json({ message: 'Erreur serveur' });
        }

        res.status(201).json({
            message: 'Réservation ajoutée avec succès',
            reservationId: result.insertId
        });
    });
});



module.exports = router

