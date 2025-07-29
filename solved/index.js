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

  response.status(200).send({});
});

app.put("/users/:id", (request, response) => {
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

  response.status(200).send({});
});

export default app;
