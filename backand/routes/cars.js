const express = require('express')
const router = express.Router()
const multer = require("multer");
const path = require("path");
const db = require('../data/db')


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // تأكد أن مجلد uploads موجود
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // اسم فريد للصورة
  }
});

const upload = multer({ storage: storage });

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
router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT*FROM voitures WHERE id=?', [id], (err, results) => {
    if (err) { res.status(500).send(err) }
    else { res.status(200).json(results) }
  })
});
//detail les voitures par la marque
router.get("/order-by-marque", (req, res) => {
  db.query('SELECT * FROM voitures ORDER BY marque ', (err, results) => {
    if (err) {
      res.status(500).send(err)
    }
    else { res.status(200).json(results) }
  })
});
//detail les voitures par le status
router.get("/order-by-status", (req, res) => {
  db.query('SELECT * FROM voitures ORDER BY status ', (err, results) => {
    if (err) {
      res.status(500).send(err)
    }
    else { res.status(200).json(results) }
  })
});

//post voiture

router.post("/upload", upload.single("image"), (req, res) => {
  const { matricul, marque, prix } = req.body;
  const imagePath = req.file ? req.file.filename : null;

  const sql = "INSERT INTO voitures (matricul, marque, prix, img) VALUES (?, ?, ?, ?)";
  db.query(sql, [matricul, marque, prix, imagePath], (err, result) => {
    if (err) {
      console.error("Erreur lors de l'insertion :", err);
      return res.status(500).json({ message: "Erreur serveur" });
    }
    res.status(201).json({ message: "Voiture ajoutée avec image !" });
  });
});

//modifiy le info de la voiture
router.put('/:id', (req, res) => {
  const { matricul, marque, prix, img, status } = req.body;
  const { id } = req.params;
  db.query('UPDATE voitures SET matricul = ?, marque = ?, prix = ?, img = ? , status= ? WHERE id = ?', [matricul, marque, prix, img, status, id], (err) => {
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