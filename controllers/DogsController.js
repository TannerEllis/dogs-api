let dogs = require('../dogs');

module.exports = {
  read: (req, res) => {
    if (req.query.breed) {
      let filteredDogs = dogs.filter(dog => {
        return dog.breed === req.query.breed
      })
  
      res.send(filteredDogs)
    } else {
      res.send(dogs)
    }
  },

  update: (req, res) => {
    for (let i = 0; i < dogs.length; i++) {
      if (dogs[i].id === Number(req.params.id)) {
        dogs[i].price = req.body.price
      }
  
      return res.send(dogs)
    }
  },

  create: (req, res) => {
    dogs.push(req.body);
    res.send(dogs);
  },

  delete: (req, res) => {
    for (let i = 0; i < dogs.length; i++) {
      if (dogs[i].id === Number(req.params.id)) {
        dogs.splice(i, 1);
      }
  
      return res.send(dogs)
    }
  },

  getFilteredDogs: (req, res) => {
    let filteredDogs = dogs.filter((dog) => {
      return (dog.city === req.params.city && dog.breed === req.params.breed)
    })
  
    res.send(filteredDogs)
  }
}