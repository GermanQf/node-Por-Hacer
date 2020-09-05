
//guardar las notas
const fs = require('fs');
const { rejects } = require('assert');
const { describe } = require('yargs');

let listarPorHacer = [];

const guardarDb=() =>{

    return new Promise((resolve, reject) => {
     
    let data = JSON.stringify(listarPorHacer);//vuelve el objeto un json valido

    fs.writeFile('dataBase/data.json',data,err => {
        if(err) {
            reject('Error al insertar la tarea');
            return
        } else {
            resolve ('Tarea creada exitosamente',data);
        }

    });

    });

    //otra forma
    /*fs.writeFile('dataBase/data.json',data, (err)=>{
        if(err) throw new Error('No se pudo guadar',err);
    });*/

}



const cargarDb = ()=>{
    //si hay error, entonces manda un arreglo vacío
    try {
        let tareasJson = fs.readFileSync('dataBase/data.json');
        listarPorHacer = JSON.parse(tareasJson);
        //console.log(tareasArray);
        return listarPorHacer;
        
    } catch (error) {
        return [];
    }
    
}

const crear = (descripcion) => {
    
    listarPorHacer = cargarDb();
    let porHacer = {
        descripcion,
        completado: false
    };
    listarPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
}

const actualizar=(descripcion,completado = true) => {
    //cargo la bd
    cargarDb();
    let index = listarPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if(index>=0){
        listarPorHacer[index].completado = completado;
        guardarDb();
        return true;
    } else {
        return false;
    }
    
}


 const borrarTarea=(descripcion)=> {

    cargarDb();
    let index = listarPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    //otra forma
   /* let nuevoListado = listarPorHacer.filter(tarea=> {
        return tarea.descripcion !== descripcion
    });
    if(listarPorHacer.length===nuevoListado.length){
        return false;
    } else {
        listarPorHacer = nuevoListado;
        guardarDb();
        return true;
    }*/
    

    listarPorHacer.splice(index,1);
    guardarDb();

 }


module.exports = {
    crear,
    cargarDb,
    actualizar,
    borrarTarea
}

