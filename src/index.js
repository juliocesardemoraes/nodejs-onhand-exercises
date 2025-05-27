import express from 'express';
import cors from 'cors';
import { usersMock } from './mocks/users.js';

const app = express();

app.use(
  cors({
    exposedHeaders: ['X-Total-Count'],
  })
);
app.use(express.json());

app.get('/', (request, response) => {
  response.status(200).send({ working: true });
});

app.get('/users', (request, response) => {
  // Faça uma implementação baseada no usersMock
  // Quando passado na rota /users?name=julio
  // Essa rota users deve pegar um usuário do usersMock com o name julio
  // E retornar o objeto deste usuário

  return response.status(200).send({});
});

app.get('/users/:id', (request, response) => {
  // Faça uma implementação baseada no usersMock
  // Quando passado na rota /users/2
  // Essa rota users deve pegar um usuário do usersMock com o id 2
  // E retornar o objeto deste usuário

  return response.status(200).send({});
});

const PORT = process.env.PORT || 3000;

// Este IF abaixo é só para meu caso de testes, não é necessário para uma aplicação real
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

export default app;
