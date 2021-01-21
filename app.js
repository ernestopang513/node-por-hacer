// const argv = require('yargs').argv;
const colors = require('colors')

const argv = require('./config/yargs').argv

// console.log(argv);
const porHacer = require('./por-hacer/por-hacer')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        if (listado.length === 0) {
            console.log('Aun no hay tareas por hacer'.red)
        } else {
            for (let tarea of listado) {
                console.log('=====Por Hacer====='.green);
                console.log(tarea.descripcion);
                console.log('Estado: ', tarea.completado);
                console.log('==================='.green);
            }

        }

        break;

    case 'actualizar':
        let = actualizar = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizar)
        break;

    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;

    default:
        console.log('Comando inexistente, prueba con otro')
        break;
}