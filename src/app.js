const express = require('express'); const app = express();
// body-parser app.use(express.json());
app.use(express.urlencoded({extended:false})); app.set('port', process.env.PORT | 3000);

app.get('/', (req,res)=>{
res.send("Bienvenido a mi API creado con la profesora Adriana Collaguazo");
});

app.use("/api/persona",require("./routes/persona") );



app.listen(app.get('port')); console.log(`Server on port ${app.get('port')}`)
