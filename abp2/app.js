const express = require("express");
const app = express();

app.listen(3000,() => {
    console.log('El servidor se ha levantado en el puerto 3000');
});

    //CODIGO PARA SIGNO ZODIACAL
app.get("/zodiaco/:yyyy/:dd/:mm", (req, res) => {
    const ano = req.params.yyyy;
    const mes = req.params.dd;
    const dia = req.params.mm;
    console.log(req.params)

    signoZodiacal(dia, mes);
    res.send(`
        Naciste el ${dia} / ${mes} / ${ano} <br>
        Tu signo Zodiacal es: ${signoZodiacal(dia, mes)}
    `);
});

function signoZodiacal(dia, mes) {
    if ((dia >= 21 && dia <= 31) && mes == 3 || dia <= 19 && mes == 4) {
        return `Aries, el Carnero <br> Elemento: Fuego (Cardinal) <br> Domicilio: Marte y Pluton`;
    }
    if ((dia >= 20 && dia <= 31) && mes == 4 || dia <= 20 && mes == 5) {
        return "Tauro, el Toro <br> Elemento: Tierra (Fijo) <br> Domicilio: Venus y Tierra";
    }
    if ((dia >= 21 && dia <= 31) && mes == 5 || dia <= 20 && mes == 6) {
        return "Geminis, los Gemelos <br> Elemento: Aire (Mutable) <br> Domicilio: Venus y Tierra";
    }
    if ((dia >= 21 && dia <= 31) && mes == 6 || dia <= 20 && mes == 7) {
        return "Cancer, el Cangrejo <br> Elemento: Agua (Cardinal) <br> Domicilio: Luna";
    }
    if ((dia >= 21 && dia <= 31) && mes == 7 || dia <= 22 && mes == 8) {
        return "Leo, el Leon <br> Elemento: Fuego (Fijo) <br> Domicilio: Sol";
    }
    if ((dia >= 23 && dia <= 31) && mes == 8 || dia <= 23 && mes == 9) {
        return "Virgo, el Virgen <br> Elemento: Tierra (Mutable) <br> Domicilio: Mercurio";
    }
    if ((dia >= 24 && dia <= 31) && mes == 9 || dia <= 23 && mes == 10) {
        return "Libra, la Balanza <br> Elemento: Aire (Cardinal) <br> Domicilio: Venus";
    }
    if ((dia >= 24 && dia <= 31) && mes == 10 || dia <= 22 && mes == 11) {
        return "Escorpio, el Escorpion <br> Elemento: Agua (Fijo) <br> Domicilio: Pluton y Marte";
    }
    if ((dia >= 23 && dia <= 31) && mes == 11 || dia <= 22 && mes == 12) {
        return "Sagitario, el Arquero <br> Elemento: Fuego (Mutable) <br> Domicilio: Jupiter";
    }
    if ((dia >= 23 && dia <= 31) && mes == 12 || dia <= 22 && mes == 1) {
        return "Capricornio, la Cabra de Mar <br> Elemento: Tierra (Cardinal) <br> Domicilio: Saturno";
    }
    if ((dia >= 23 && dia <= 31) && mes == 1 || dia <= 20 && mes == 2) {
        return "Acuario, el Aguador <br> Elemento: Aire (Fijo) <br> Domicilio: Urano y Saturno";
    }
    if ((dia >= 21 && dia <= 31) && mes == 2 || dia <= 20 && mes == 3) {
        return "Piscis, el Pez <br> Elemento: Agua (Mutable) <br> Domicilio: Neptuno y Jupiter";
    }
    
}

    //CODIGO PARA CHINOS
    app.get("/astrologia-china/:yyyy/:dd/:mm", (req, res) => {
        const ano = req.params.yyyy;
        console.log(req.params)
    
        signoChino(ano);
    
        res.send(`
            Naciste el a??o: ${ano} <br>
            Tu signo chino es: ${signoChino(ano)}
        `);
    });
    
    function signoChino(ano) {
        const resto = ano % 12;
        let signo = "";
        switch (resto) {
            case 0: signo = "Macaco <br>Descripcion: Divertidos, activos y muy inteligentes, los monos son los bromistas del zodiaco chino. Desde peque??o, su independencia hace la diferencia con el resto. Su carisma, su extra??a belleza o su estilo atraen a artistas y fil??sofos. Su animo es muy variable: necesita contenci??n en momentos de crisis que podr??an bajonearlo o descontrolar su temperamento."; break;
            case 1: signo = "Gallo <br>Descripcion: Los gallos son sencillos, imaginativos, responsables y expresivos. Se destacan por su capacidad laboral, perseverancia, tozudez y capacidad de sacrificio para trabajar horas extras y llevar el alimento a su hogar. Son personas complejas: parecen fuertes pero en el fondo necesitan la validaci??n de sus seres queridos para estar bien."; break;
            case 2: signo = "Perro <br>Descripcion: Si algo caracteriza a los perros, es la lealtad. Afectuosos y sinceros, parecen ser calmos aunque llevan la preocupaci??n en su interior. Suelen hacer todo lo posible por las personas que consideren importantes: nunca abandonar??n a sus amigos, familiares o su trabajo. Tienen pocos pero buenos amigos y son muy rutinarios."; break;
            case 3: signo = "Cerdo <br>Descripcion: Entusiastas y en??rgicos, los cerdos aman disfrutar la vida. Sin embargo, tambi??n suelen ser muy realistas. Reservados, cautos y obsesivos para mantener las cosas como deben estar, si sienten que los pueden invadir son capaces de embestir con colmillos ocultos y provocar heridas de muerte. Es el signo ideal para formar un hogar, criar hijos y protegerlos. Son los mejores amigos del zodiaco chino."; break;
            case 4: signo = "Rata <br>Descripcion: Habiles para los negocios -aunque a veces un poco taca??as-, las ratas son brillantes en todo lo que sea intelectual. Vitales, divertidas y curiosas, en el ??mbito emocional son creativas, sensibles y muy humanas, lo que los convierte en personas ??nicas e irremplazables. Sin embargo, son un tanto solitarias y su humor es cambiante."; break;
            case 5: signo = "Buey <br>Descripcion: Equilibrados, prudentes y en extremo observadores, los b??falos son inteligentes, humildes, trabajadores, confiables y muy determinados en todo lo que encaran. En lo emocional se caracterizan por sus sentimientos nobles y su enorme capacidad de proteger a los que quiere. Acostumbrados a mandar, su car??cter es volc??nico e irascible, y les cuesta pedir disculpas."; break;
            case 6: signo = "Tigre <br>Descripcion: Apasionados y activos, los tigres son l??deres naturales. Con una audacia ??nica, aman los desaf??os y las aventuras en todos los ??mbitos de la vida. A veces, sin embargo, toman decisiones descaradas y son dif??ciles de controlar. Necesitan ser admirados y aplaudidos; y que los otros est??n pendientes de sus antojos y caprichos. Le cuesta delegar, son bastante manipuladores, obsesivos, ciclot??micos y muy demandantes."; break;
            case 7: signo = "Conejo <br>Descripcion: Sinceros por sobre todas las cosas, los conejos suelen ser cari??osos, expresivos, tranquilos, confiados, fuertes y siempre est??n atentos a todos los detalles. Pero detr??s de esta personalidad tranquila, esconden su confianza y su fuerza. Tiene suerte en la vida y, si no abusan, pueden administrarla para revertir con maestr??a las situaciones negativas."; break;
            case 8: signo = "Dragon <br>Descripcion: Fuertes, generosos e independientes, los dragones se caracterizan por su tenacidad e inteligencia. Son seres especiales por su capacidad de recuperaci??n ante hechos y situaciones l??mite. Impetuosos, gustan de los desaf??os, los conflictos y los peligros. Necesitan un objetivo para poder vivir, y nunca es mesurado. Es el ??nico animal mitol??gico del zod??aco chino, por lo que se lo venera y respeta m??s que a otros signos."; break;
            case 9: signo = "Serpiente <br>Descripcion: Apasionadas, profundas y complejas, las serpientes son tan intuitivas como afortunadas. Con la belleza, el sex appeal, el glamour y la simpat??a como dones innatos, seducir es parte de su ADN. Suele amar profundamente, le encanta el sexo, es posesiva, celosa, manipuladora, ego??sta y vengativa. Duales por naturaleza, nunca pasan inadvertidas."; break;
            case 10: signo = "Caballo <br>Descripcion: Atl??ticos y estudiosos, los caballos siempre van en buscan la felicidad. Viven con pasi??n y suelen ser los l??deres en sus grupos. A pesar de su libertad, la necesidad de autonom??a que tienen y su inseguridad afectiva, con los a??os y en la madurez necesitan estar rodeados por su familia. En extremo orgullosos, su ego suele ser su tal??n de Aquiles."; break;
            case 11: signo = "Cabra <br>Descripcion: Las cabras son tolerantes, perseverantes, generosas y sentimentales. Suele ser un signo vulnerable y f??cil de influenciar ???en lo positivo y lo negativo??? por personas que la dominan, explotan, conviven o trabajan con ella. La familia es muy importante en su desarrollo emocional y en sus elecciones, ya que es presa f??cil de las tentaciones que se le presentan."; break;
        }
        return signo;
    }