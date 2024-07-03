  // Captura o elemento do botão de abrir o modal
  var modalBtn = document.getElementById('openModalBtn');

  // Adiciona um listener para detectar o clique no botão
  modalBtn.addEventListener('click', function() {
    // Seleciona o modal pelo ID
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    // Mostra o modal
    myModal.show();
  });


// Confirmar login

document
  .getElementById('formularioLogin')
  .addEventListener('submit', function (evento) {
    evento.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const mensagem = document.getElementById('mensagem')

    const emailValido = 'usuario@exemplo.com'
    const senhaValida = 'senha123'

    if (email === emailValido && senha === senhaValida) {
      mensagem.style.color = 'green'
      mensagem.textContent = 'Login bem-sucedido! Redirecionando...'
      setTimeout(() => {
        window.location.href = 'perfil.html'
      }, 2000)
    } else {
      mensagem.style.color = 'red'
      mensagem.textContent = 'Email ou senha inválidos'
    }
  })
