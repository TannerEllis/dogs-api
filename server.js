const express = require('express');
const bodyParser = require('body-parser');

let DogsCtrl = require('./controllers/DogsController')

const app = express();
const port = 3005;

app.use(bodyParser.json())

app.get('/api/dogs', DogsCtrl.read)
app.get('/api/dogs/:city/:breed', DogsCtrl.getFilteredDogs)
app.post('/api/dogs', DogsCtrl.create)
app.delete('/api/dogs/:id', DogsCtrl.delete)
app.put('/api/dogs/:id', DogsCtrl.update)


app.listen(port, () => {
  console.log('listening on port', port)
})
