const express = require("express");

const app = express();
//para utilizar o json na aplicação
app.use(express.json())
//método sende envia mensagem para quem faz a requisição.
app.get("/courses", (request, response) => {
  const query = request.query;
  //return response.json(["Curso 1", "Curso 2", "Curso 3"]);
  return response.json(query);
});

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body)
 // return response.json(["Curso 1", "Curso 2", "Curso 3","Curso 4"]);
 return response.json(body);
});
app.put("/courses/:id", (request, response) => {
  const {id} = request.params;
 // console.log(id)
  //return response.json(["Curso 6", "Curso 2", "Curso 3"]);
  return response.json(id);
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 3"]);
});
//Iniciando a porta
app.listen(2005);
