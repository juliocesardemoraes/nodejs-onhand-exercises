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

app.get("/users", (request, response) => {
  return response.status(200).send({});

  // Faça uma implementação baseada no usersMock
  // Retorne o array de users
});

// Crie uma rota POST
// Para inserir usuarios no userMock assim como na aula.

const PORT = process.env.PORT || 3000;

// Este IF abaixo é só para meu caso de testes, não é necessário para uma aplicação real
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

export default app;
