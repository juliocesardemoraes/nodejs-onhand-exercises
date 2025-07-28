import request from "supertest";
import app from "../index.js";
import { usersMock } from "../mocks/users.js";

describe("PATCH /users", () => {
  const mockUserToInsert = {
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

  function getRandomInt(max, min = 0) {
    const num = Math.floor(Math.random() * max);
    num + min;
    return num;
  }

  it("A rota deve existir", async () => {
    const generatedId = getRandomInt(1000, 100);
    mockUserToInsert.id = generatedId;

    const response = await request(app)
      .patch(`/users/${mockUserToInsert.id}`)
      .send(mockUserToInsert);

    console.log("STATUS", response.statusCode);

    expect(response.statusCode).not.toBe(404);
  });

  // it("A rota deve retornar código 400 caso não exista id no body da request", async () => {
  //   const response = await request(app)
  //     .post(`/users`)
  //     .send(mockUserWithMissingIdToInsert);
  //   expect(response.statusCode).toBe(400);
  // });

  // it("Deve adicionar um novo usuario ao array de usersMock quando chamado", async () => {
  //   const response = await request(app).post(`/users`).send(mockUserToInsert);
  //   expect(response.statusCode).toBe(201);

  //   expect(usersMock).toContainEqual(mockUserToInsert);
  // });
});
