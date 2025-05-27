import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    exposedHeaders: ['X-Total-Count'],
  })
);
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({ working: true });
});

// Crie uma rota GET que retorna o seu nome

const PORT = process.env.PORT || 3000;

// Este IF abaixo é só para meu caso de testes, não é necessário para uma aplicação real
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

export default app;
