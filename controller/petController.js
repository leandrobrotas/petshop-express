const petModel = require('../model/pet');

const petController = {
    index: (req, res) => {
        res.send(petModel.listarPets());
    },
    add: (req, res) => {
        let novoPet = req.params;
        petModel.adicionarPet(novoPet);
        res.send(`Opa, ${novoPet.nome} foi adicionado com sucesso!`);
    },
    buscar: (req, res) => {
        let pet = req.params;
        console.log(pet);
        res.send(petModel.buscarPet(pet.nome));
    },
};

module.exports = petController;