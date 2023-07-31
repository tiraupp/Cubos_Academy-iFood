const { getHours, getMinutes } = require("date-fns");


const clienteA = new Date(2015,1,1,12);
const clienteB = new Date(2015,1,1,2);
const clienteC = new Date(2015,1,1,8);
const clienteD = new Date(2015,1,1,18,0,59,999);


const taAberto = (chegada)=>{
  const horario = getHours(chegada)*60 + getMinutes(chegada);
  if(horario >= 480 && horario < 1081){
    return true;
  } else {
    return false;
  }
}
console.log(taAberto(clienteA));
console.log(taAberto(clienteB));
console.log(taAberto(clienteC));
console.log(taAberto(clienteD));