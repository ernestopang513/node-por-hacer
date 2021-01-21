const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcioón de la tarea por hacer'
}


const completado = {

    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'


}
const argv = require('yargs')
    .command('crear', 'Crea un elemento para agregar al to do list', {
        descripcion
    }).command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Ingresa la descripcion de la tarea y la borra si existe', {
        descripcion
    })
    .help()
    .argv

module.exports = {
    argv
}