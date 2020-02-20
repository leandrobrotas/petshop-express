let pets = [{ nome: "doug" },
{ nome: "costelinha" }];

const listarPets = () => {
  let conteudo = "";
  pets.filter(pet => conteudo += `
  --------------------------- <br>
  Nome: ${pet.nome} <br>
  --------------------------- <br>
  `)
  return conteudo;
};

const adicionarPet = novoPet => {
  return pets.push(novoPet);
};

const buscarPet = nomePet => {
  let petsEncontrados = pets.filter(pet => pet.nome == nomePet);
  return petsEncontrados;
};

module.exports = { listarPets, adicionarPet, buscarPet };
