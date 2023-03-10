let preguntas = ["Fecha Inicio 'Año/Mes/Dia' \n", "Fecha Termino 'Año/Mes/Dia'\n"];
let respuestas = [];


function preguntar(p) {
    process.stdout.write(preguntas[p]);
}

let fechainicio = "";
let fechatermino = "";
let diasTrabajados = [];


process.stdin.on('data', (data) => {
    //Para pasar a las siguiente pregunta o terminar
    respuestas.push(data.toString().trim());
    if (respuestas.length < preguntas.length) {
        preguntar(respuestas.length)
    } else { 
        //Asignamos las respuestas de las preguntas a la fecha inicio y termino.
        if(respuestas[0]) {
            fechainicio = new Date(respuestas[0]);
        }
        if(respuestas[1]) {
            fechatermino = new Date(respuestas[1]); 
        }

    let fechaactual = fechainicio;
    //Mientras fecha actual no sea mayor o igual se le ira sumando 1 a fecha actual
    while (fechaactual <= fechatermino){
        diasTrabajados.push(fechaactual.getDay(fechaactual));
        fechaactual = new Date(fechaactual.setDate(fechaactual.getDate() +1));
    }
    if (diasTrabajados.length > 0) {
        contadorHoras(diasTrabajados);
    }
    process.exit();
    }
})
//Calcula las horas trabajadas dependiendo del día
let horasLV = 0;
let horasSA = 0;
let cumLV = 0;
let cumSA = 0;
let pagaDiaria = 0;

function contadorHoras(diasTrabajados) {
    diasTrabajados.forEach(dia => {
        if(dia === 1 || dia === 3 || dia === 5) {
            pagaDiaria = 7100 * 7;
            cumLV = cumLV + pagaDiaria;
            horasLV = horasLV + 7;
        } else if (dia === 2 || dia ===4) {
            pagaDiaria = 7100 * 8;
            cumLV = cumLV + pagaDiaria;
            horasLV = horasLV + 8;
        } else if (dia === 6){
            pagaDiaria = 12300 * 5;
            cumSA = cumSA + pagaDiaria;
            horasSA = horasSA + 5;
        }
    })
    console.log(`
    Cantidad Horas LU-VI: ${horasLV}
    Valor Hora: $7100
    Subtotal LU-VI: ${cumLV} \n
    Cantidad Horas SA: ${horasSA}
    Valor Hora: $12300
    Subtotal SA: ${cumSA} \n
    Total: ${cumLV} + ${cumSA} = ${cumLV + cumSA}
    `)
}

preguntar(0);