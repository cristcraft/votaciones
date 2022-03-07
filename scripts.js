let umbral;
let listaPartidoFinal = [];
let listaVotos = [];
let curules = [];
let totalCurules;

/*let listaPartidos = [
    'Partido de la U',
    'Cambio Radical',
    'Partido Liberal',
    'Partido Conservador',
    'Centro Democratico',
    'Partido mira',
    'Centro Esperanza',
    'Pacto Historico Y verde',
    'Partido ASI',
    'Salvacion Nacional'
]*/

function calcUmbral(){
    listaPartidoFinal = [];
    listaVotos = [];
    curules = [];
    votosValidos = prompt('Escribe la cantidad de votos validos');
    totalCurules = prompt('Escribe el total de curules que hay');

    totalVotosValidos = votosValidos / totalCurules;

    umbral = totalVotosValidos / 2;
    console.log(umbral) 
}

function calcCifraRepartidora(){
    filtrarUmbral();

    listaPartidoFinal.forEach(partido => {
        for (let e = 1; e <= totalCurules; e++) {
            divPartido = partido.votosTotales / e;
            listaVotos.push(divPartido);
        }
    });

    let cifraRepartidora = ordenar();

    totalCurulesPartido(cifraRepartidora);

    console.log(curules)
    let resultado = JSON.stringify(curules);
    localStorage.setItem('resultado', resultado);
    location.reload()

    console.log(cifraRepartidora)
}

function filtrarUmbral(){
    let nombreYvotosPartidos = [];

    //Codigo para cuando la lista de los partidos no este quemada
    let listaPartidos = prompt('Escribre la el total de partidos que hay');
    for (let i = 0; i < listaPartidos; i++) {
        let nombrePartido = prompt('Escribe el nombre del partido n°' + (i+1));
        let votos = prompt('Escribe el total de votos que tiene el partido n°' + nombrePartido);
        votos = parseInt(votos);

        nombreYvotosPartidos.push({nombrePartido: nombrePartido, votosTotales : votos})
    }

    /*for (let i = 0; i < listaPartidos.length; i++) {
        let votos = prompt('Escribe el total de votos que tiene el partido ' + listaPartidos[i]);
        votos = parseInt(votos);

        nombreYvotosPartidos.push({nombrePartido: listaPartidos[i], votosTotales : votos})
    }*/

    nombreYvotosPartidos.forEach(partido => {
        if(partido.votosTotales >= umbral){
            listaPartidoFinal.push(partido);
        }
    });

}

function ordenar(){
    let orden = listaVotos.sort((a, b) => a - b )
    orden = orden.reverse();
    
    totalCurules = parseInt(totalCurules);
    n = 0;

    resultado = [];

    for (let i = 0; i < orden.length; i++) {
        if(orden[i] >= umbral){
            if(n !== totalCurules){
                resultado.push(orden[i]);
                n++;
            }
        }      
    }

    let orden2 = resultado.sort((a, b) => a - b )

    return orden2[0];
    
}

function totalCurulesPartido(cifraRepartidora){
    listaPartidoFinal.forEach(partido => {
        let curul = partido.votosTotales / cifraRepartidora;
        curules.push({datos: partido, curules : curul})
    });
}