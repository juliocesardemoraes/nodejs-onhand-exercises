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
  const body = request.body;
  let userExists = false;

  for (let i = 0; i < usersMock.length; i++) {
    if (usersMock[i].id == Number(id)) {
      usersMock.splice(i, 1);
      userExists = true;
    }
  }

  if (userExists === false) {
    return response.status(404).send({ message: "usuário não encontrado!" });
  }

  response.status(200).send({ users: usersMock });
});

export default app;
