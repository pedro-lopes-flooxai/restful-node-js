let NeDB = require('nedb');
let db = new NeDB({
    filename:'users.db',
    autoload: true
});

module.exports = (app) => {

    app.get('/users', (req, res) => {

        db.find({}).sort({name: 1}).exec((err, users)=>{

            if (err) {
                console.log(`erroe: ${err}`);
                res.status(400).json({
                    error:err
                });
            }else {
        

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users
        });

    }
    
    });

        
});

    
    app.post('/users', (req, res) => {

        db.insert(req.body, (err, user) => {

            if (err) {
                console.log(`erro: ${err}`);
                res.status(400).json({
                    error: err
                });
            } else {
                
                res.status(200).json(user);

            }

        });

    });

    let routeId = app.route(`/users/:id`);
    
    routeId.get((req,res)=>{
    
        db.findOne({_id:req.params,id}).exec((err, user)=>{
            
            if(err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }
        });     
    });

};