const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function organizarAgenda(pacientes, executar, nome){
  if(executar === "atender"){
    pacientes.splice(0,1);
  } else {
    pacientes.splice(pacientes.length, 0 , nome);
  }
  console.log(pacientes.join(", "));
}

organizarAgenda(pacientes, "atender");
organizarAgenda(pacientes, "agendar", "Tiago");
organizarAgenda(pacientes, "agendar", "José");
organizarAgenda(pacientes, "atender");