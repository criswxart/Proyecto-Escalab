//Data

const data = [ 
    {
        categoriaId: 123,
        nombre: "Ropa",
        estado: true
    },
    {
        categoriaId: 124,
        nombre: "Zapatillas",
        estado: true
    }

];

//Listar categoria

const listar = (req, res) =>{

    res.json({
        ok: true,
        categorias:data
    })
}

//Resgistrar categoria

const registrar = (req, res) =>{

    res.json({
        ok: true,
        categorias:data[0]
    })
}

//Actualizar categoria

const actualizar = (req, res) =>{

    res.json({
        ok: true,
        categorias:data[0]
    })
}

//Borrar categoria

const borrar = (req, res) =>{

    res.json({
        ok: true,
        categorias:data[0]
    })
}
module.exports = {
    listar,
    registrar,
    actualizar,
    borrar
}