console.log('Hello World!');

let btnAddTarefa = document.querySelector('#adicionar-tarefa');
let inputTarefa = document.querySelector('#tarefa-digitada');
let divTarefas = document.querySelector('#tarefas');

btnAddTarefa.addEventListener('click', criarTarefa);
inputTarefa.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    criarTarefa();
  }
})

function criarTarefa() {
  if (inputTarefa.value.trim() === '') {
    return alert('Você não pode criar uma tarefa vazia');
  }
  let tarefa = `
    <div class="col-md-4">
      <div class="card-tarefa">
          <div class="texto-tarefa">
              <p>${inputTarefa.value}</p>
          </div>
          <div class="botao-tarefa">
              <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
          </div>
      </div>
    </div>
  `
  divTarefas.innerHTML += tarefa;
  inputTarefa.value = '';

  addFuncaoFinalizarTarefa();

  // alert('Tarefa criada: ' + inputTarefa.value);
};

function addFuncaoFinalizarTarefa() {
  let listaBotoes = document.querySelectorAll('.botao-tarefa');

  for (let i = 0; i < listaBotoes.length; i++) {
    let botao = listaBotoes[i];

    botao.addEventListener('click', () => {
      if (window.confirm('Você tem certeza que deseja excluir a tarefa?')) {
        botao.parentElement.parentElement.remove();
      }
    })
  }
}

addFuncaoFinalizarTarefa();