let menu = prompt ("Indica la opción de menú deseada: 1. Hamburguesa completa con gaseosa 2. Sandwich de milanesa con papas fritas 3. Ensalada caesar")

let cantidad = Number( prompt ("Indica la cantidad deseada"));


for (let i = 0; i< `${cantidad}`; i++) {
    console.log (`¡Hola! Has pedido el menú número ${menu}!`)
}