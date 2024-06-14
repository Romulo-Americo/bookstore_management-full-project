const express = require('express');
const app = express();
const cors = require('cors');

const bookRoute = require('./routes/bookRoute/bookRoute');

const typeEmployeeRoute = require('./routes/employeeRoute/typeEmployeeRoute');
const employeeRoute = require('./routes/employeeRoute/employeeRoute');

const clientRoute = require('./routes/clientRoute/clientRoute');

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) =>{
    res.send({ message:'My bookstore management!' });
})

//Rota dos dados do livro
app.use('/book', bookRoute); 

//Rota dos dados do funcionário
app.use('/typeEmployee', typeEmployeeRoute);
app.use('/employee', employeeRoute)

//rota dos dados dos clientes
app.use('/client', clientRoute)

app.listen(PORT, (err) => {
    if (err) {
        console.error(`Error starting the server: ${err}`);
    } else {
        console.log(`App listening on port http://localhost:${PORT}`);
    }
});