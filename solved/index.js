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

app.post("/users", (request, response) => {
  console.log(request.body);

  if (!request.body.id) {
    return response.status(400).send({ message: "Id faltante" });
  }

  usersMock.push(request.body);
  // Faça uma implementação baseada no usersMock
  // Retorne o array de users

  // Caso o request.body venha vazio não insira nenhum usuário

  response.status(201).send({});
});

export default app;
