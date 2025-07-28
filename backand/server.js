const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3000;
const authRoutes=require('./routes/authentication')
const voituresRoutes=require('./routes/cars')
const usersRoutes=require('./routes/users')
const reservationRoutes=require('./routes/reservation')

app.use(cors());
app.use(bodyParser.json());
app.use('/auth',authRoutes)
app.use('/voiture',voituresRoutes)
app.use('/users',usersRoutes)
app.use('/reservation',reservationRoutes)
app.use("/uploads", express.static("uploads"));


app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});