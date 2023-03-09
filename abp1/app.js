// console.log(parseInt(process.argv[2]) + parseInt(process.argv[3]) + parseInt(process.argv[4]));
// let preguntas = ["Decime como ta llamass cabronazo \n", "Decime tu apeshido igual mamahuevo \n"];
// let respuestas = [];

// function preguntar(indice) {
//     process.stdout.write(preguntas[indice])
// }

// process.stdin.on('data', (data) =>{
//     respuestas.push(data.toString().trim());
//     if(respuestas.length < preguntas.length){
//         console.log(respuestas.length);
//         preguntar(respuestas.length);
//     } else {
//         console.log(respuestas.toString())
//         process.exit()
//     }
// });

// preguntar(0);

let preguntas = ["Fecha Inicio 'Año/Mes/Dia' \n", "Fecha Termino \n"];
let respuestas = [];
let cantHoras = 0;

function preguntar(p) {
    process.stdout.write(preguntas[p]);
}

process.stdin.on('data', (data) => {
    respuestas.push(data.toString().trim());
    const fecha = new Date(data.toString().trim());
    contadorHoras(fecha.getDay());

    console.log(fecha.getDay());
    console.log(pagaDiaria);

    function contadorHoras(dia) {
        if(dia === 1 || dia === 3 || dia === 5) {
            pagaDiaria = 7100 * 7;
        } else if (dia === 2 || dia ===4) {
            pagaDiaria = 7100 * 8;
        } else if (dia === 6){
            pagaDiaria = 12300 * 5;
        } else return;
    }
    
})

preguntar(0);

/*
let cantidadHorasLV = 16;
const valorHoraLV = 7100;
const subtotalLV = 113600;
let cantidadHorasSA = 5;
const valorHoraSA = 12300;
const subtotalSA = 61500;
const total = subtotalLV + subtotalSA;
*/

/*
    respuestas.push(data.toString().trim());
    if (respuestas.length < preguntas.length) {
        preguntar(respuestas.length);
    } else {
        console.log(`
        Cantidad Horas LU-VI: ${cantidadHorasLV[0]}
        Valor Hora: ${valorHoraLV}
        Subtotal LU-VI: ${subtotalLV} \n
        Cantidad Horas SA: ${cantidadHorasSA}
        Valor Hora: ${valorHoraSA}
        Subtotal SA: ${subtotalSA} \n
        Total: ${subtotalLV} + ${subtotalSA} = ${total}
        `);
        process.exit();
    }

*/