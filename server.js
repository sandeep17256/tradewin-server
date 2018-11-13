var express = require('express');
var bodyparser = require('body-parser');

var app = express();
var router = require('./routes/index')
var userRoutes = require('./routes/users.routes');
var productRoutes = require('./routes/products.routes');
var host = "127.0.0.1"; 
var port = 3030;
app.use(bodyparser.urlencoded({extended:false}));

app.use('/',router);
app.use('/',userRoutes);
app.use('/api',productRoutes);

app.listen(port,host,()=>{
    console.log(`Server is Running at http://${host}:${port}`);
    
})