var mongoose = require('mongoose');

var users = require('../controllers/users.js');
var User = mongoose.model('User');
var Product = mongoose.model('Product');
var products = require('../controllers/products.js');
var Product = mongoose.model('Product');
var Score = mongoose.model('Score');
var scores = require('../controllers/scores.js');



module.exports = function(app) {

  
    
    app.get('/', function(req, res,err) {
            res.render('index');
    })

    app.post('/api/register', function(req,res,err){
            users.register(req, res)
    })

    app.get('/api/allUsers', function (req, res){
        users.find(req, res);
    });

    app.get('/api/getloggeduser', function (req, res){
        users.getProfile(req, res);
    });
  
    app.get('/api/allScores', function (req, res){
        scores.find(req, res);
    });
  
    // PRODUCT STUFF    ///////////////////
    app.get('/api/allProducts', function (req, res){
        products.find(req, res);
    });
 
    app.get('/api/randomProduct', function (req, res){
        products.random(req, res);
    });

/////////////////////////////////////////////////////////////
    app.post('/api/retrieveSingleProduct/', function (req, res){
        products.getSingleProduct(req, res);
    });
    
/////////////////////////////////////////////////////////////
    app.get('/api/findproduct/:id', function (req, res){ //product ID
        products.findproduct(req, res);
    });

    app.post('/api/addProduct/:id', function (req, res){        //id should be users id
        products.create(req, res);
    });
    app.post('/api/add/score', function (req, res){        //id should be users id
        scores.create(req, res);
    });



    app.post('/api/deleteProduct', function (req, res){
        products.delete(req, res);
    });

    app.get('/api/findproduct/updatedProduct/${id}', function(req, res) {
        products.findOne(req, res);
    })

    // app.post('/api/updateProduct1', function (req, res){   //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON
    //     products.update1(req, res); //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON
    // }); //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON

   
    app.post('/api/updateProduct', function (req, res){   //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON
        products.update(req, res); //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON
    }); //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON

    ///END OF PRODUCT STUFF /////////////////


    app.get('/success', function(req, res) {
        users.show(req, res);      
    });

    app.post('/api/login', function(req,res){
        users.login(req, res)
})

app.get('/api/logout', function(req,res){
    users.logout(req, res)
    res.render()
}) 
app.get('/delete/:id', function(req,res){    //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON
    users.delete(req, res)   //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON
    });   


}