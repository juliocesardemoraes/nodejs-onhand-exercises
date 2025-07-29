// @ts-nocheck
import request from "supertest";
import app from "../index.js";
import { usersMock } from "../mocks/users.js";

// Adicionando para intelisense.
// @ts-check
/**
 * @jest-environment node
 */

describe("DELETE /users", () => {
  const mockUserToDelete = {
    name: "javier",
    email: "javier@gmail.com",
    birthdate: "1997-03-17",
    address: "Centro, 404, Goiaba - NS",
    active: false,
  };

  function getRandomInt(min = 0, max) {
    const num = Math.floor(Math.random() * max);
    num + min;
    return num;
  }

  it("deve existir", async () => {
    const generatedId = getRandomInt(100, 1000);

    // Guarantees that the user exists in mock
    mockUserToDelete.id = generatedId;
    usersMock.push(mockUserToDelete);

    const response = await request(app).delete(`/users/${generatedId}`);

    console.log("STATUS", response.statusCode);

    // Shouldn't be 404 because the user exists, so 404 only if non existant route
    expect(response.statusCode).not.toBe(404);
  });

  it("deve retornar código 200 e deletar o usuário do usersMock", async () => {
    const generatedId = getRandomInt(1001, 10000);
    mockUserToDelete.id = generatedId;
    usersMock.push(mockUserToDelete);

    const response = await request(app).delete(`/users/${generatedId}`);

    let wasDeleted = true;

    for (let i = 0; i < usersMock.length; i++) {
      if (usersMock[i].id == mockUserToDelete.id) {
        wasDeleted = false;
        break;
      }
    }

    if (wasDeleted === false) {
      expect(false).toBeCustomCheck(false, "usuário não foi deletado");
    }

    expect(response.statusCode).toBe(200);
  });

  it("deve retornar código 404 se o id não existir no usersMock", async () => {
    const generatedId = getRandomInt(1000, 10000);

    const response = await request(app).delete(`/users/${generatedId}`);

    expect(response.statusCode).toBe(404);
  });
});
