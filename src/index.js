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

app.delete("/users/:id", (request, response) => {
  const id = request.params.id;
  // Deve adicionar uma lógica para remover o usuário de acordo com o parametro passado na rota

  // Deve adicionar uma validação para verificar se o usuário existe no usersMock
  response.status(200).send({ users: usersMock });
});

export default app;
