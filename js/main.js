let menu 

do {
   menu = prompt ("Indica la opción de menú deseada: 1. Hamburguesa completa 2. Sandwich de milanesa 3. Ensalada caesar")
} while (menu > 3)

let cantidad = Number( prompt ("Indica la cantidad deseada"));


function pedido () {
    switch (menu) {
        case "1":
            menu = "Hamburguesa completa";
            precio = cantidad * 950;
            console.log(`Pedido: Hamburguesa completa. Valor $950. Cantidad: ${cantidad}.
                        Precio final: $${precio}`);
        break;

        case "2":
            menu = "Sandwich de milanesa";
            precio = cantidad * 850;
            console.log(`Pedido: Sandwich de milanesa. Valor $850. Cantidad: ${cantidad}.
            Precio final: $${precio}`)
        break;

        case "3":
            menu = "Ensalada caesar";
            precio = cantidad * 800;
            console.log(`Pedido: Ensalada caesar. Valor $800. Cantidad: ${cantidad}.
            Precio final: $${precio}`)
        break;

        default: "No has seleccionado ningun menu"
    }
}

pedido ()