const AnimalApi = require('./lib/index.js').default
AnimalApi.getCat().then(animal => {
    console.log(animal)
})