## Explicação da Tarefa: Criar uma Rota GET `/name` que Retorna o Seu Nome

Nesta tarefa, você vai **criar uma rota GET** utilizando o framework **Express.js**. O objetivo é que o servidor responda com o **seu nome e um status HTTP 200 (OK)** quando o endpoint `/name` for acessado.

### CONFIGURAÇÃO INICIAL

```
npm install

// Para rodar o backend
npm run start

// Para rodar o backend em modo desenvolvedor
npm run dev

// Para rodar os testes
npm run test

// Para rodar os testes(que atualizam toda vez que você atualiza o código)
npm run test-dev
```

---

### TESTES

Para rodar os testes é só você rodar o comando

```
npm run test
```

Se der failed no teste quer dizer que algo está errado com a aplicação.

### ✅ Objetivo

Adicionar uma rota GET `/name` que responda com:

```json
"SEU NOME"
```

E um **status HTTP 200** para indicar que a requisição foi bem-sucedida.

---

### 📂 Código Base

O servidor Express já está configurado da seguinte forma:

```js
import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ working: true });
});

// Crie uma rota GET que retorna o seu nome

const PORT = process.env.PORT || 3000;

// Este IF abaixo é só para meu caso de testes, não é necessário para uma aplicação real
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
```

### 📌 Observação

- O uso de `res.status(200).send(...)` garante que o status HTTP esteja explícito.
- Essa prática ajuda na clareza e manutenção de APIs bem definidas.
