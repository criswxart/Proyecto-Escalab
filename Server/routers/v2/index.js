const google = require('./login_router');


module.exports = (app) =>{

    app.use('/api/v2', google);


}