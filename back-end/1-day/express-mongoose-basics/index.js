//this is the entry point of my application cause this is mention in the package.json if you want the name to be something else then change this in the package.json
//"main": "index.js"
require('dotenv').config()// to use env dotenv package is required 
//import/require necessary packages 
const PORT = process.env.PORT;
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//creating the app with the express function
const app = express()

//forcing the app to use bodyparser so we can parse the JSON data into the JS objects
//simple english 
app.use(bodyParser.json()) // we have to specifily have to tell that we want the parser for the json data

//at this point of time we are just configuring the server its not up and running yet basically its not 'Listening' to any request 
//what i said its not 'Listening' //as i said earlier simple english thats what called developer experience
app.listen(PORT,function notifyer(){
    console.log(`You Server is up and running on PORT : ${PORT}`)
})
//we also have to specify on which Ear you to listen LEFT or RIGHT and computer have many ears not only like us thats why we have to assign them number like PORT no 3000


//well it sucks cause i have use the address and home analogy to explain this so routes explaination can a bit trickier but we will manage it 

//routes 
//basic syntax of routes
//app.HTTP_METHOD_NAME(ROUTE,HANDLER)

app.get('/', (request,response)=>{
    response.send("BOOM Baby !!")
})

//now we add a listener for the post request the post request we expect some data in the request body and we are expecting the json data and that's why we have used body-parser

app.post('/user',(request,response)=>{
    //first we will extract the user data from the request.body
    const {name ,email ,age} = request.body
    response.send(
        `<table border="1">
         <tr>
            <th> Name </th>
            <td> ${name} </td>
         </tr>
         <tr>
            <th> Email </th>
            <td> ${email} </td>
         </tr>
         <tr>
            <th> Age </th>
            <td> ${age} </td>
         </tr>

        </table>`
    )
})

// now the next task is to connect the mongoose so first visit the mongoose
//mongoose says use mongoose.connect() method to connect
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log("successfully connected"))
  .catch(error => console.log("connection error:", error));

//below is the test code from mongoose
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));