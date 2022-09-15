let menuesElegidos = [];
let confirmacion1 = true;
let confirmacion2 = true;
let itemId = 0;

// PLANILLA DE OBJETO (OC)
class menu {
    constructor(comida, guarnicion, bebida, cantidad){ 
        this.comida = comida;
        this.guarnicion = guarnicion;
        this.bebida = bebida;
        this.cantidad = cantidad;
    }
    printConsole(){
        console.log(`MENÚ`);
        console.log(`COMIDA: ${this.comida}\nGUARNICIÓN: ${this.guarnicion}\nBEBIDA: ${this.bebida}\nCANTIDAD: ${this.cantidad}\n----------------------------\n`);
    
    }
}

// INGRESO DE DATOS
const ingresarDatos = () => {

    let comida = prompt('Ingrese el menú deseado:', 'HAMBURGUESA'); 
    comida === null ? comida ='SIN MENÚ' : comida = comida.toUpperCase();
    
    let guarnicion = prompt('Ingrese su guarnición o acompañamiento:', 'PAPAS FRITAS'); 
    guarnicion === null ? guarnicion ='SIN GUARNICIÓN' : guarnicion = guarnicion.toUpperCase();

    let bebida = prompt('Ingrese su bebida elegida:', 'AGUA SIN GAS');
    bebida === null ? bebida = 'SIN BEBIDA' : bebida = bebida.toUpperCase(); 

    let cantidad = Number(prompt('Elija la cantidad deseada:', 2)); 
    isNaN(cantidad) ? cantidad = 0 : cantidad = cantidad;
    

    return {comida , guarnicion, bebida, cantidad} ;
}
// EJECUCIÓN
do {
    const {comida, guarnicion, bebida, cantidad} = ingresarDatos();
    if(comida === '' ) {
    console.warn('Error: Debe elejir un menú valido.');
    } else {

    let itemMenu = new menu (comida, guarnicion, bebida, cantidad);
    menuesElegidos.push(itemMenu);
    itemMenu.printConsole();

    }

   confirmacion1 = confirm("Desea sumar un nuevo menú?");

} while(confirmacion1);
    console.log('ÍNDICE DE MENUES ELEGIDOS:');
    console.table(menuesElegidos);

