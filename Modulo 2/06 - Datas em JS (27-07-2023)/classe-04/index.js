const { getHours, getMinutes, getDay } = require("date-fns");


const clienteA = new Date(2021,3,25,12);
const clienteB = new Date(2021,3,26,12);
const clienteC = new Date(2021,3,26,7,59);
const clienteD = new Date(2021,3,23,18,0,59,999);
const clienteE = new Date(2021,3,24,8,10);


const taAberto = (chegada)=>{
  const diaSemana = getDay(chegada);
  if(diaSemana !== 0 && diaSemana !== 6){
    const horario = getHours(chegada)*60 + getMinutes(chegada);
    if(horario >= 480 && horario < 1081){
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }

}
console.log(taAberto(clienteA));
console.log(taAberto(clienteB));
console.log(taAberto(clienteC));
console.log(taAberto(clienteD));
console.log(taAberto(clienteE));