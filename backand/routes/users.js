const express = require('express')
const router = express.Router()
const db = require('../data/db')


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
router.put('/:id',async (req, res) => {
  const { name, prenom,tele, email,password } = req.body;
  const { id } = req.params;
    const cryptpassword = await bcrypt.hash(password,10)
  const role='client'
  db.query('UPDATE users SET name = ?, prenom = ?, email = ?, tele = ?, password = ?, role=?  WHERE id = ?', [name, prenom, email,tele,cryptpassword,role, id], (err) => {
    if (err) throw err;
    res.json({
      message: 'user modify avec succès',

       });
  });
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
