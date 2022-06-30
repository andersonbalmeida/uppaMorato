  
  function getUser() {
    axios.get(`https://upaa-55b4e-default-rtdb.firebaseio.com/pets.json`)
      .then(response => {
        const data = response.data
  
        renderResults.textContent = JSON.stringify(data)
        
      })
      .catch(error => console.log(error))
  }

getUser()
  

    function Detalhes() {
    axios.get(`https://upaa-55b4e-default-rtdb.firebaseio.com/pets/id1.json`)
      .then(response => {
        const data = response.data
  
        cor.textContent = data.cor
        especie.textContent = data.especie
        idade.textContent = data.idade
        nome.textContent = data.nome
        observacao.textContent = data.observacao
        raca.textContent = data.raça
        sexo.textContent = data.sexo
      })
      .catch(error => console.log(error))
  }

Detalhes()
