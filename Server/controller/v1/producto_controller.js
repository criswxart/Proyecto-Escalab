
const data = [ 
    {
        productoId: 145,
        nombre: "Iphone 11 pro",
        precio: 750000,
        anoLanzamiento: 2020
    },
    {
        productoId: 145,
        nombre: "Samsung S20",
        precio: 470000,
        anoLanzamiento: 2020
    }

];

//Listar productos

const listar = (req, res) =>{

    res.json({
        ok: true,
        productos:data
    })
}

//Crear producto

const registrar = (req, res) =>{

    res.json({
        ok: true,
        productos:data[0]
    })
}

//Actualizar producto

const actualizar = (req, res) =>{

    res.json({
        ok: true,
        productos:data[0]
    })
}

//Borrar producto

const borrar = (req, res) =>{

    res.json({
        ok: true,
        productos:data[0]
    })
}
module.exports = {
    listar,
    registrar,
    actualizar,
    borrar
}