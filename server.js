const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test_mx'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conexión exitosa a la base de datos');
});

app.post('/api/contacts', (req, res) => {
  const name = req.body.fullName;
  const company = req.body.companyName;
  const email = req.body.email;
  const phone = req.body.phone;
  const category = req.body.category;
  const message = req.body.message;

  const sql = 'INSERT INTO contacts (name, company, email, phone, category, message) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [name, company, email, phone, category, message], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.send('Dato agregado exitosamente');
  });
});

const PORT = 3030;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
