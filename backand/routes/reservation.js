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
//amenez  reservation par id
router.get('/user/:userId', (req, res) => {
    const userId = req.params.userId;
    db.query('SELECT * FROM reservation WHERE userId = ?', [userId], (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des réservations :', err);
            return res.status(500).json({ message: 'Erreur serveur' });
        }
        res.json(results);
    });
});
//amenez  reservation et voiture et utiliqateur
router.get('/details', (req, res) => {
    const sql = `
    SELECT 
  r.id,
  r.date_debut,
  r.date_fin,
  r.statut,
  u.name, u.prenom, u.email,
  v.marque AS voiture_marque,
  v.matricul
FROM reservation r
JOIN users u ON r.userid = u.id
JOIN voitures v ON r.voitureid = v.id;
  `;

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erreur SQL :', err);
            return res.status(500).json({ error: err });
        }
        res.status(200).json(results);
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
// update reservation statut
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { statut } = req.body;
    db.query(
        'UPDATE reservation SET statut = ? WHERE id = ?',
        [statut, id],
        (err, result) => {
            if (err) {
                console.error('Erreur update statut :', err);
                return res.status(500).json({ message: 'Erreur serveur' });
            }
            res.json({ message: 'Statut mis à jour' });
        }
    );
});

// delete reservation
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM reservation WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Erreur lors de la suppression :', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }
    res.status(200).json({ message: 'Réservation supprimée avec succès' });
  });
});



module.exports = router

