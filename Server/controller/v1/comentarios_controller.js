//Data
const data = [

    {
        cometarioId: 1,
        texto: "Muy bonitas las zapatillas",
        valoracion: 5
    },
    {
        cometarioId: 2,
        texto: "Son de buena calidad",
        valoracion: 6
    }

];

//Listar comentarios

const listar = (req, res) =>{

    res.json({
        ok: true,
        comentarios:data
    })
}

//Crear comentario

const registrar = (req, res) =>{

    res.json({
        ok: true,
        comentarios:data[0]
    })
}

//Actualizar comentario

const actualizar = (req, res) =>{

    res.json({
        ok: true,
        comentarios:data[0]
    })
}

//Borrar comentario

const borrar = (req, res) =>{

    res.json({
        ok: true,
        comentarios:data[0]
    })
}
module.exports = {
    listar,
    registrar,
    actualizar,
    borrar
}