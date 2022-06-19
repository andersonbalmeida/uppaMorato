  
  function getUser() {
    axios.get(`https://upaa-55b4e-default-rtdb.firebaseio.com/pets/id1.json`)
      .then(response => {
        const data = response.data
  
        adocoes_titulo.textContent = data.nome
        adocoes_descricao.textContent = data.observacao
      })
      .catch(error => console.log(error))
  }

getUser()
  