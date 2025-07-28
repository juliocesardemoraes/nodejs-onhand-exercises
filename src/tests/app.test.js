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
    name: "test",
    email: "teste@gmail.com",
    birthdate: "1997-03-17",
    address: "Centro, 404, Goiaba - NS",
    active: false,
  };

  function getRandomInt(min = 0, max) {
    const num = Math.floor(Math.random() * max);
    num + min;
    return num;
  }

  it("A rota deve existir", async () => {
    const generatedId = getRandomInt(100, 1000);
    mockUserToInsert.id = generatedId;
    usersMock.push(mockUserToInsert);

    const response = await request(app)
      .patch(`/users/${mockUserToInsert.id}`)
      .send(mockUserToInsert);

    console.log("STATUS", response.statusCode);

    expect(response.statusCode).not.toBe(404);
  });

  it("A rota deve retornar código 404 caso não exista o id no usersMock", async () => {
    const generatedId = getRandomInt(1000, 10000);

    const response = await request(app)
      .patch(`/users/${generatedId}`)
      .send(mockUserWithMissingIdToInsert);

    expect(response.statusCode).toBe(404);
  });

  it("A rota deve retornar código 200 e fazer um PATCH do usuário no usersMock", async () => {
    const generatedId = getRandomInt(1000, 10000);
    mockUserToInsert.id = generatedId;
    usersMock.push(mockUserToInsert);

    const mockUserToUpdate = {
      name: `javier Update ${generatedId}`,
      email: "javierupdate@gmail.com",
      active: true,
    };

    const response = await request(app)
      .patch(`/users/${generatedId}`)
      .send(mockUserToUpdate);

    let wasInserted = false;

    for (let i = 0; i < usersMock.length; i++) {
      if (usersMock[i].name == mockUserToUpdate.name) {
        console.log("mockUSER IGUAL NAME");
        wasInserted = true;
      }
    }

    if (wasInserted === false) {
      expect(false).toBeTruthy();
    }

    expect(response.statusCode).toBe(200);
  });

  // it("Deve adicionar um novo usuario ao array de usersMock quando chamado", async () => {
  //   const response = await request(app).post(`/users`).send(mockUserToInsert);
  //   expect(response.statusCode).toBe(201);

  //   expect(usersMock).toContainEqual(mockUserToInsert);
  // });
});
