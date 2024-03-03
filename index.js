const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const app = express();
app.use(cors());

app.use(cors({
  origin: 'http://localhost:3001',
}));


const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Customer_Data',
    password: '1432',
    port: 5432,
});

client.connect((err)=>{
  if(err){
    console.log("connection error",err.stack);
  }
  else{
    console.log("Connection successful");
  }
});



app.get('/customers', (req, res) => {
  client.query('SELECT * FROM public."Customers"', (err, result) => {
      if (err) {
          console.error('Error occurred while executing query', err.stack);
          res.status(500).send('Error while retrieving data from Customers');
      } else {
          console.log('Retrieved Data :',result.rows);
          res.json(result.rows);
      }
  });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
