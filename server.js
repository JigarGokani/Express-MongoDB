// Server Instantiate
// const { response } = require('express');
const express = require('express');
const app = express();

// used to parse req.body in express
const bodyParser = require('body-parser');

// specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());




// Activate the server on 3000 port
app.listen(3000,() => {
    console.log("Server Started at port no .3000");
})


// Get request
app.get('/', (req,res) => {
    res.send("Hello jii Kaise ho saree!!");
})


//Post request
app.post('/api/cars', (req,res) => {
    const{name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car Submitted Succesfully!");
})


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {console.log("Connection Succesfull!")})
.catch((error) => {console.log("Recieved an error")});