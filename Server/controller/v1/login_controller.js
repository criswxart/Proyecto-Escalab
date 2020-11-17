const data = {
    id: 123,
    usuario: "admin",
    role: "ROLE_ADMIN"
}


// ********** Login

const login = (req, res) =>{

    res.json({
        ok:true,
        usuario: data
    });

}



module.exports = {
    login
    
};