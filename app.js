/**
 * INSTALL FF PACKAGES:
 *  - express
 *  - mongoose
 *  - nodemon
 *  - dotenv
 * 
 */

const express = require('express');
const app = express();
app.use(express.json());

require('dotenv').config();
require('./Database/db');

const StudentController = require('./Controller/controller');
const studentController = new StudentController; 

app.get('/api/get', studentController.get);
app.post('/api/add', studentController.add);
app.delete('/api/delete', studentController.delete);
app.put('/api/update', studentController.update);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving is running at http://localhost:${port}`)
})