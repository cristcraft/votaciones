let resultado;
let umbral1;
let CifraRepartidora1;
let curules1;
let datosText = document.querySelector('.datos'); 
let div = document.querySelector('#resultado');
let table = document.querySelector('#table');

document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage != ' '){
        resultado = JSON.parse(localStorage.getItem('resultado'))
        umbral1 = parseFloat(localStorage.getItem('umbral'))
        CifraRepartidora1 = parseFloat(localStorage.getItem('cifraRepartidora'));
        curules1 = parseInt(localStorage.getItem('curules'));
        
        pintarDatos(umbral1, CifraRepartidora1, curules1);
        pintarResultado(resultado);
    }
})

function pintarDatos(umbral1, cifraRepartidora1, curules1){
    datosText.innerHTML = `
                            <ul>
                                <li><h2>Umbral: ${umbral1.toFixed(2)} </h2></li>
                                <li><h2>Cifra Repartidora: ${CifraRepartidora1.toFixed(2)} </h2></li>
                                <li><h2>Curules Disponibles: ${curules1} </h2></li>
                            </ul>                        
    `;
}


function pintarResultado(resultado){
    let tbody = '';
    resultado.forEach(res => {
        console.log(res.curules)
        console.log(res.datos.votosTotales)
        tbody  += `
                    <tbody>
                        <tr>
                            <td>
                            ${res.datos.nombrePartido}
                            </td>
                            <td>
                                ${res.datos.votosTotales}
                            </td>
                            <td>
                                ${res.curules.toFixed(1)}
                            </td>
                        </tr>
                    </tbody>
                    `
    });

    table.innerHTML += tbody
}
