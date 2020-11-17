const data = {
    id: 123,
    usuario: "admin",
    role: "ROLE_ADMIN"
}


/*  
    google 
*/ 

const google = (req, res) =>{

    res.json({
        ok:true,
        usuario: data
    });

}

module.exports = {
    google
    
};