import express from 'express';
import cors from 'cors';

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

// Crie uma rota GET chamada server-error que retorne um erro 500

// Crie um router para as rotas de name assim como na aula
// Esse router devera ter uma rota get no /name que retorne o seu nome e um status 200.

const PORT = process.env.PORT || 3000;

// Este IF abaixo é só para meu caso de testes, não é necessário para uma aplicação real
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

export default app;
