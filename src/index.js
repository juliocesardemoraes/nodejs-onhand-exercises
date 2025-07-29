// @ts-nocheck
import express from "express";
import cors from "cors";
import { usersMock } from "./mocks/users.js";

const app = express();

app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send({ working: true });
});

app.patch("/users", (request, response) => {
  // Caso o request.body não tenha um id não insira nenhum usuário
  // retorne o código 400 e a mensagem Id faltante

  // Faça uma implementação baseada no usersMock
  // Retorne o array de users
  response.status(201).send({});
});

app.patch("/users/:id", (request, response) => {
  // Caso o request.body não tenha um id não insira nenhum usuário
  // retorne o código 400 e a mensagem Id faltante
  const id = request.params.id;
  const body = request.body;
  let isUserValid = false;

  for (let i = 0; i < usersMock.length; i++) {
    if (usersMock[i].id == Number(id)) {
      isUserValid = true;
      usersMock[i] = { ...usersMock[i], ...body };
      break;
    }
  }

  if (isUserValid === false)
    return response.status(404).send({ message: "Id não encontrado" });

  // Faça uma implementação baseada no usersMock
  // Retorne o array de users
  response.status(200).send({});
});

app.put("/users", (request, response) => {
  // Caso o request.body não tenha um id não insira nenhum usuário
  // retorne o código 400 e a mensagem Id faltante

  // Faça uma implementação baseada no usersMock
  // Retorne o array de users
  response.status(201).send({});
});

export default app;
