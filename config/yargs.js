

const optCrear = {
    descripcion: {
        demand : true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
};

const optActualizar = {
    descripcion: {
        demand : true,
        alias: 'd',
        desc: 'Descripcion de la tarea por actualizar'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'estado de la tarea a actualiazar/Completado Pendiente'
  }
};

const optBorrar  = {
    descripcion: {
        demand : true,
        alias: 'd',
        desc: 'Borrar una tarea'
    }
};



const argv = require('yargs')
            .command('crear','Crea una nueva tarea',optCrear)
            .command('actualizar','Actualiza el estado de la tarea',optActualizar)
            .command('borrar','Borrar una tarea',optBorrar)
            .help()             
            .argv

module.exports = {
    argv
}            