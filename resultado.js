let resultado; 
let div = document.querySelector('#resultado');
let table = document.querySelector('#table');

document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage != ' '){
        resultado = JSON.parse(localStorage.getItem('resultado'))
        pintarResultado(resultado);
    }
})

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
