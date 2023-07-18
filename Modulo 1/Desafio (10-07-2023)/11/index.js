function solucao(min, km) {
    const tarifaTempoNormal = 50;
    const tarifaTempoAcima = 30;
    const tarifaKmNormal = 70;
    const tarifaKmAcima = 50;
    let valorTempo = 0;
    let valorKm = 0;
    if (min > 20) {
        valorTempo = 20 * tarifaTempoNormal + (min - 20) * tarifaTempoAcima;
    } else {
        valorTempo = min * tarifaTempoNormal;
    }
    if (km > 10) {
        valorKm = 10 * tarifaKmNormal + (km - 10) * tarifaKmAcima;
    } else {
        valorKm = km * tarifaKmNormal;
    }
    console.log(Math.floor(valorTempo + valorKm));
}

solucao(25, 11.5);
