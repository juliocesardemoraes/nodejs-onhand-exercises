import request from "supertest";
import app from "../index.js";
import { usersMock } from "../mocks/users.js";

describe("POST /users", () => {
  const mockUserToInsert = {
    id: 6,
    name: "javier",
    email: "javier@gmail.com",
    birthdate: "1997-03-17",
    address: "Centro, 404, Goiaba - NS",
    active: false,
  };

  const mockUserWithMissingIdToInsert = {
    name: "javier",
    email: "javier@gmail.com",
    birthdate: "1997-03-17",
    address: "Centro, 404, Goiaba - NS",
    active: false,
  };

  it("A rota deve existir e enviar o código 201 caso insira um user corretamente", async () => {
    const response = await request(app).post(`/users`).send(mockUserToInsert);
    expect(response.statusCode).toBe(201);
  });

  it("A rota deve retornar código 400 caso não exista id no body da request", async () => {
    const response = await request(app)
      .post(`/users`)
      .send(mockUserWithMissingIdToInsert);
    expect(response.statusCode).toBe(400);
  });

  it("Deve adicionar um novo usuario ao array de usersMock quando chamado", async () => {
    const response = await request(app).post(`/users`).send(mockUserToInsert);
    expect(response.statusCode).toBe(201);

    expect(usersMock).toContainEqual(mockUserToInsert);
  });
});
