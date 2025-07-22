const express = require('express');
const app = express();
const db = require('./data/db'); 
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt=require('bcrypt')
const port = 3000;
const authRoutes=require('./routes/authentication')

app.use(cors());
app.use(bodyParser.json());
app.use('/auth',authRoutes)
//////////////////////voitures/////////////////

//amenez toutes les voitures
app.get('/voitures', (req, res) => {
  db.query('SELECT * FROM voitures', (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des voitures :', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }
    res.json(results);
  });
});
//amenez la voiture par id
app.get('/voitures/:id',(req,res)=>{
    const id = req.params.id;
    db.query('SELECT*FROM voitures WHERE id=?',[id],(err,results)=>{
        if(err){res.status(500).send(err)}
        else{res.status(200).json(results)}
    })
});
//detail les voitures par la marque
app.get("/voitures/order-by-marque",(req,res)=>{
    db.query('SELECT * FROM voitures ORDER BY marque ',(err,results)=>{
        if(err){
            res.status(500).send(err)
        }
        else{res.status(200).json(results)}
    })
});
//detail les voitures par le status
app.get("/voitures/order-by-status",(req,res)=>{
    db.query('SELECT * FROM voitures ORDER BY status ',(err,results)=>{
        if(err){
            res.status(500).send(err)
        }
        else{res.status(200).json(results)}
    })
});

//post voiture

app.post('/addvoiture', (req, res) => {
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
app.put('/voitures/:id', (req, res) => {
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
app.delete('/voitures/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM voitures WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'la voiture supprimé' });
  });
});



/////////////////////users///////////////////////
// //amenez toutes users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des users :', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }
    res.json(results);
  });
});
// //amenez user pour id

app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    db.query('SELECT*FROM users WHERE id=?',[id],(err,results)=>{
        if(err){res.status(500).send(err)}
        else{res.status(200).json(results)}
    })
});

//post users

//modifiy le info de user
app.put('/users/:id',async (req, res) => {
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
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'users supprimé' });
  });
});

/////////////////////reservation///////////////////////

//amenez toutes reservation
app.get('/reservation', (req, res) => {
  db.query('SELECT * FROM reservation', (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des reservations :', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }
    res.json(results);
  });
});






app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});