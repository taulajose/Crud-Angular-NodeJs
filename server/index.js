const express = require('express');
const morgan = require('morgan')
const app=express();
const cors = require('cors')

const {mongoose} = require('./database')
// settings
app.set('port',process.env.PORT || 3000)


//middlewares
app.use(morgan('dev')) //muestra en consola las peticiones
app.use(express.json()) // todos los datos que lleguen del navegador van a llegar en el req.body para poder utilizarlas
app.use(cors({origin:'http://localhost:4200'}))

//routes

app.use(require('./routes/employee.routes'))


//starting the server 

app.listen(app.get('port'),()=>{
    console.log('server on port 3000')
})