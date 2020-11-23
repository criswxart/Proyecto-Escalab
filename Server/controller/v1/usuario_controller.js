//Data

const data = [ 
    {
        id: 123,
        usuario: "admin",
        role: "ROLE_ADMIN"
    },
    {
        id: 124,
        usuario: "logistica",
        role: "ROLE_USER"
    }

];

//Listar usuario

const listar = (req, res) =>{

    res.json({
        ok: true,
        usuarios:data
    })
}

//Resgistrar usuario

const registrar = (req, res) =>{

    res.json({
        ok: true,
        usuarios:data[0]
    })
}

//Actualizar usuario

const actualizar = (req, res) =>{

    res.json({
        ok: true,
        usuarios:data[0]
    })
}

//Borrar usuario

const borrar = (req, res) =>{

    res.json({
        ok: true,
        usuarios:data[0]
    })
}
module.exports = {
    listar,
    registrar,
    actualizar,
    borrar
}