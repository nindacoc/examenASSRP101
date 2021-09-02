const dbConnection = require('../config/databaseCon'); const connection = dbConnection();
let getPersona = async (req,res)=>{
await connection.query("select `Country/Region` as Pais, TotalCases as TotalCasos from `datasets-worldometer` Order by TotalCasos DESC Limit 5 ", (err,result)=>{ if (result)
res.send(result);

else
res.status(500).send(err);
});
}
let addPersona = async (req,res)=>{
const {Country,Continent,Population,TotalCases,TotalDeaths,TotalRecovered, ActiveCases  } = req.body
await connection.query(`INSERT INTO datasets-worldometer VALUES(${Country}, '${Continent}', '${Population}',, '${TotalCases}',, '${TotalDeaths}',, '${TotalRecovered}',, '${ActiveCases}')`, (err,result)=>{

if (result)
res.send({Country,Continent,Population,TotalCases,TotalDeaths,TotalRecovered, ActiveCases });
else
res.status(500).send(err);
});
}
module.exports = { getPersona, addPersona}