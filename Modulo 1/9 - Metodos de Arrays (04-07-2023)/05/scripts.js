const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(pacientes, nome){
  pacientes.splice(pacientes.length, 0 , nome);
  console.log(pacientes.join(", "));
}

function atenderPaciente(pacientes){
  pacientes.splice(0,1);
  console.log(pacientes.join(", "));
}

function cancelarAtendimento(pacientes, nome){
  let posicaoDaFila = pacientes.indexOf(nome);
  pacientes.splice(posicaoDaFila,1);
  console.log(pacientes.join(", "));
}


agendarPaciente(pacientes, "Tiago");
atenderPaciente(pacientes);
cancelarAtendimento(pacientes,"Maria");
