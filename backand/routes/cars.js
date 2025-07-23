const express = require('express')
const router = express.Router()
const db = require('../data/db')

//amenez toutes les voitures
router.get('/', (req, res) => {
  db.query('SELECT * FROM voitures', (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des voitures :', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }
    res.json(results);
  });
});
//amenez la voiture par id
router.get('/:id',(req,res)=>{
    const id = req.params.id;
    db.query('SELECT*FROM voitures WHERE id=?',[id],(err,results)=>{
        if(err){res.status(500).send(err)}
        else{res.status(200).json(results)}
    })
});
//detail les voitures par la marque
router.get("/order-by-marque",(req,res)=>{
    db.query('SELECT * FROM voitures ORDER BY marque ',(err,results)=>{
        if(err){
            res.status(500).send(err)
        }
        else{res.status(200).json(results)}
    })
});
//detail les voitures par le status
router.get("/order-by-status",(req,res)=>{
    db.query('SELECT * FROM voitures ORDER BY status ',(err,results)=>{
        if(err){
            res.status(500).send(err)
        }
        else{res.status(200).json(results)}
    })
});

//post voiture

router.post('/', (req, res) => {
  const { matricul, marque,prix,img, } = req.body;

  if (!matricul || !marque || !prix || !img) {
    return res.status(400).json({ message: 'Champs manquants' });
    
  }
  const status='disponible'
  
  
  const sql = 'INSERT INTO voitures (matricul,marque, prix, img,status) VALUES (?, ?, ? ,? ,?)';
  db.query(sql, [matricul,marque, prix, img,status], (err, result) => {
    if (err) return res.status(500).json({ message: 'Erreur serveur' });

    res.status(201).json({
      message: 'la voiture ajouté avec succès',
      id: result.insertId,
      matricul,
      prix
      
    });
  });
});

//modifiy le info de la voiture
router.put('/:id', (req, res) => {
  const { matricul, marque, prix,img } = req.body;
  const { id } = req.params;
  db.query('UPDATE voitures SET matricul = ?, marque = ?, prix = ?, img = ? WHERE id = ?', [matricul, marque, prix,img, id], (err) => {
    if (err) throw err;
    res.json({
      message: 'la vouture modify avec succès',
      id,
      matricul, 
      marque, 
      prix
       });
  });
});
// supprimer la voiture
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM voitures WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'la voiture supprimé' });
  });
});



module.exports = router