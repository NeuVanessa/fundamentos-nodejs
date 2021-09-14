const express = require('express');

const app = express();

//método sende envia mensagem para quem faz a requisição.
app.get("/",(request,response)=>{
return response.json({message:"Hello Word Teste Nodemon!"})


})
//Iniciando a porta
app.listen(2005)