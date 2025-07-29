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

app.patch("/users/:id", (request, response) => {
  const id = request.params.id;
  const body = request.body;

  // Você deve por meio do params id modificar um usuário no usersMock que já foi
  // importado neste arquivo

  // Caso o id não exista dentro do usersMock retorne um erro 404

  response.status(200).send({});
});

app.put("/users/:id", (request, response) => {
  const id = request.params.id;
  const body = request.body;

  // Você deve por meio do params id modificar um usuário no usersMock que já foi
  // importado neste arquivo

  // Caso o id não exista dentro do usersMock retorne um erro 404

  response.status(200).send({});
});

export default app;
