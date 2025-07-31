const express = require('express');
const router = express.Router();
const db = require('../data/db');

router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'entre tout les information' });
  }

  const sql = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error('error le message no envoyer:', err);
      return res.status(500).json({ error: 'eror de server' });
    }
    res.status(201).json({ message: 'merci pour votre message' });
  });
});
// get les message

router.get('/', (req, res) => {
  db.query('SELECT * FROM messages ORDER BY id DESC', (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des messages:', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
    res.json(results);
  });
});
// DELETE message by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM messages WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Erreur lors de la suppression :", err);
      return res.status(500).json({ error: "Erreur serveur" });
    }
    res.status(200).json({ message: "Message supprimé avec succès" });
  });
});

module.exports = router;