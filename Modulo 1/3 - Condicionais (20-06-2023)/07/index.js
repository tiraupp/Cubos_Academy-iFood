const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 30_000_00; //emCentavos

if (aposentada === true || portadoraDeDoenca === true) {
    console.log("ISENTA");
} else if (totalDeRendimentos <= 2855970) {
    console.log("VAZA LEÃO! JÁ TÁ DIFÍCIL SEM VOCÊ");
} else {
    console.log("PEGA LEÃO");
}
