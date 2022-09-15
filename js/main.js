let menuesElegidos = [];
let confirmacion1 = true;
let confirmacion2 = true;
let itemId = 0; // Inicializo el identificador del item, el cual se incrementara con la creacion de cada objeto.

// PLANILLA DE OBJETO (OC)
class menu {
    constructor(comida, guarnicion, bebida, cantidad){  // Recibe los datos ingresados por prompts.
        this.comida = comida;
        this.guarnicion = guarnicion;
        this.bebida = bebida;
        this.cantidad = cantidad;
    }
    printConsole(){ // Método impresion en consola de las propiedades y datos de los objetos.
        console.log(`MENU`); // Se aplica un poco de estilo al encabezado en consola.
        console.log(`COMIDA: ${this.comida}\nGUARNICION: ${this.guarnicion}\nBEBIDA: ${this.bebida}\nCANTIDAD: ${this.cantidad}\n----------------------------\n`);
    
    }
}

//**** FUNCIÓN DE SOLICITUD DE INGRESO DE DATOS ****/
const ingresarDatos = () => {

    let comida = prompt('Ingrese el menu deseado:', 'HAMBURGUESA'); // Se solicita nombre videojuego, se carga un valor por defecto para facilitar la revisión del desafio.
    comida === null ? comida ='SIN MENU' : comida = comida.toUpperCase(); // Con fines prácticos, en caso de seleccionar la cancelacion del prompt, se cargara un 'SIN NOMBRE' en la variable.
    
    let guarnicion = prompt('Ingrese su guarnicion o acompa;amiento:', 'PAPAS FRITAS'); // Se solicita la plataforma, se carga un valor por defecto para facilitar la revisión del desafio.
    guarnicion === null ? guarnicion ='SIN GUARNICION' : guarnicion = guarnicion.toUpperCase(); // Con fines prácticos, en caso de seleccionar la cancelacion del prompt, se cargara un 'SIN PLATAFORMA' en la variable.

    let bebida = prompt('Ingrese su bebida elegida:', 'AGUA SIN GAS'); // Se solicita genero, se carga un valor por defecto para facilitar la revisión del desafio.
    bebida === null ? bebida = 'SIN BEBIDA' : bebida = bebida.toUpperCase(); // Con fines prácticos, en caso de seleccionar la cancelacion del prompt, se cargara un 'SIN GENERO' en la variable.

    let cantidad = Number(prompt('Elija la cantidad deseada:', 2)); // Se solicita stock, se carga un valor por defecto para facilitar la revisión del desafio.
    isNaN(cantidad) ? cantidad = 0 : cantidad = cantidad; // Con fines prácticos, en caso de seleccionar la cancelacion del prompt, se cargara un valor de 0 en la variable.
    

    return {comida , guarnicion, bebida, cantidad} ; // Retorna mediante un objeto literal los datos ingresados.
}

//**** RAMA PRINCIPAL DE EJECUCIÓN DEL SCRIPT ****/
do { // Mediante el do.. while se solicita al menos la creación de un objeto, y se pregunta al usuario si desea continuar con la ejecución.
    const {comida, guarnicion, bebida, cantidad} = ingresarDatos(); // Se realiza la desestructuración del objeto literal recibido de la funcion ingresarDatos.

    if(comida === '' ) { // Se controla que el dato del nombre del video juego no este vacio.

    console.warn('Error: Debe elejir un menu valido.'); // De encontrarse vacio, se envia una advertencia en consola y se vuelve a solicitar el ingreso de los datos.

    } else { // Caso contrario:

    let itemMenu = new menu (comida, guarnicion, bebida, cantidad);
    menuesElegidos.push(itemMenu);
    itemMenu.printConsole();

    }
    
   confirmacion1 = confirm("Desea sumar un nuevo menu?");

} while(confirmacion1);
    console.log('INDICE DE MENUES ELEGIDOS:');
    console.table(menuesElegidos);
