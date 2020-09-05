const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');


let comando =argv._[0];

//console.log(argv);
switch (comando) {

    //node .\app.js crear -d 'Ver Television'
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log('Tarea creada',tarea.descripcion)
        //console.log(tarea);
        break;


      //  node .\app.js listar
    case 'listar':

        let listado = porHacer.cargarDb();
        //console.log(listado);
        for (let tarea of listado){

           // console.log(tarea['descripcion'])
            console.log('=========Por Hacer================'.red);
            console.log(`${tarea['descripcion']}`);
            console.log(`estado: ${tarea['completado']}`);  
            console.log('==================================='.red); 
        }
       
        // listado.forEach(element => {
        //     console.log(element['decripcion'])
        // });
    break;
    //node .\app.js actualizar -d 'Montar bici' -c true
    case 'actualizar':
       let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
    break;

    case 'borrar':
        //console.log('Borrar');return;
      let borrado = porHacer.borrarTarea(argv.descripcion);
    break;

    
    default:
        console.log('Por defecto no reconocido');
        break;
}
