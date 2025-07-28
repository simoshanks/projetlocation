const express = require('express')
const router = express.Router()
const db = require('../data/db')
const bcrypt = require('bcrypt');


// //amenez toutes users
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des users :', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }
    res.json(results);
  });
});
// //amenez user pour id

router.get('/:id',(req,res)=>{
    const id = req.params.id;
    db.query('SELECT*FROM users WHERE id=?',[id],(err,results)=>{
        if(err){res.status(500).send(err)}
        else{res.status(200).json(results)}
    })
});

//post users

//modifiy le info de user
router.put('/:id', async (req, res) => {
  const userId = req.params.id;
  const { name, prenom, tele, email, password } = req.body;

  if (!name || !prenom || !tele || !email) {
    return res.status(400).json({ message: 'Champs manquants' });
  }

  let sql, values;

  try {
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      sql = `UPDATE users SET name = ?, prenom = ?, tele = ?, email = ?, password = ? WHERE id = ?`;
      values = [name, prenom, tele, email, hashedPassword, userId];
    } else {
      sql = `UPDATE users SET name = ?, prenom = ?, tele = ?, email = ? WHERE id = ?`;
      values = [name, prenom, tele, email, userId];
    }

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erreur lors de la mise à jour:", err);
        return res.status(500).json({ message: "Erreur serveur" });
      }
      res.status(200).json({ message: "Utilisateur mis à jour avec succès" });
    });
  } catch (err) {
    console.error("Erreur interne:", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});
// supprimer user
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'users supprimé' });
  });
});

module.exports = router
