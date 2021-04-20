window.onload = ()=>{
    listado = new ListadoTareas();
}
class Tarea{

    
    constructor(nombre, descripcion, prioridad, responsables, etiquetas, proyectos, fVencimiento ){
        this.id = this.generarId();
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.estado = 'Pendiente';
        this.responsables = responsables;
        this.etiquetas = etiquetas;
        this,proyectos = proyectos;
        this.fCreacion = new Date();
        this.fInicio = null;
        this.fFinalizacion = null;
        this.fVencimiento = fVencimiento;
    }
        generarId(){
            return Math.floor(Math.random() * 989684964); 
        }
    
    
    setNombre(nombre){
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }

    setEstado(estado){
        this.estado = estado;
    }
  
}

class ListadoTareas{
    constructor(){
        this.lista = [];
    }

    mostrarListado(){
        return this.lista;
    }

    mostrarTarea(id){
        let indice = this.lista.findIndex( (elemento) => elemento.id === id );
        if(indice === -1){
            return [];
        }
        else{
            return this.lista[indice];
        }

    }

    agregarTarea(tarea){
        this.lista.push(tarea);
    }

    eliminarTarea(id){
        let indice = this.lista.findIndex( (elemento) => elemento.id === id );
        if(indice === -1){
            return false;
        }
        else{
            this.lista.splice(indice, 1);
            return true;
        }
    }

    actualizarTarea(id, tarea){
        let indice = this.lista.findIndex( (elemento) => elemento.id === id );
        if(indice === -1){
            return false;
        }
        else{
            this.lista.splice(indice, 1, tarea);
            return true;
        }
    }

    guardar(){
        localStorage.setItem('datos', JSON.stringify(this.lista))
    }

    recuperar(){
        this.lista = JSON.parse(localStorage.getItem('datos'))
    }
}
//a la verga me vale verga prro :v