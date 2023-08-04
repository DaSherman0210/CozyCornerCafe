


const validarPedido = async (req,res) => {
    async(pedidos = '')=>{
        for (let index = 0; index < pedidos.length; index++) {
            const existeBebida = await bebidas.findOne({ nombre: pedidos[index].nombre });
            if (!existeBebida) {
                throw new Error("La/s bebida/s no esta/n en la base de datos");
            }
            const topping = pedidos[index].toppings
            console.log(topping);
            for (let i = 0; i < topping.length; i++) {
                const existeTopping = await toppings.findOne({nombre: pedidos[index].toppings[index].nombre});
                if (!existeTopping) {
                    throw new Error('No se encuentran los toppings');
                }
            }
        }
    }
}