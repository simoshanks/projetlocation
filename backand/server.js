const express = require('express');
const app = express();
const db = require('./data/db'); 
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

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




app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});