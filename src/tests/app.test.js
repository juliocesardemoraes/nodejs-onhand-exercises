import request from "supertest";
import app from "../index.js";
import { usersMock } from "../mocks/users.js";

// it("A rota deve existir", async () => {
//   const response = await request(app).post(`/users`).send(mockUserToInsert);
//   expect(response.statusCode).toBe(201);
// });

describe("GET /users", () => {
  it("Deve retornar todos os usuários (conferindo se os users do mock estão presentes)", async () => {
    const response = await request(app).get(`/users`);
    expect(response.statusCode).toBe(200);

    expect(Array.isArray(response.body)).toBe(true);

    const hasSomeMockedUsers = usersMock.some((mockUser) =>
      response.body.some(
        (returnedUser) =>
          returnedUser.id === mockUser.id &&
          returnedUser.name === mockUser.name &&
          returnedUser.email === mockUser.email
      )
    );

    expect(hasSomeMockedUsers).toBe(true);
  });
});

describe("POST /users", () => {
  const mockUserToInsert = {
    id: 6,
    name: "javier",
    email: "javier@gmail.com",
    birthdate: "1997-03-17",
    address: "Centro, 404, Goiaba - NS",
    active: false,
  };

  it("A rota deve existir", async () => {
    const response = await request(app).post(`/users`).send(mockUserToInsert);
    expect(response.statusCode).toBe(201);
  });

  it("Deve adicionar um novo usuario ao array de usersMock quando chamado", async () => {
    const response = await request(app).post(`/users`).send(mockUserToInsert);

    expect(response.statusCode).toBe(201);

    expect(usersMock).toContainEqual(mockUserToInsert);

    // expect(Array.isArray(response.body)).toBe(true);

    // const hasSomeMockedUsers = usersMock.some((mockUser) =>
    //   response.body.some(
    //     (returnedUser) =>
    //       returnedUser.id === mockUser.id &&
    //       returnedUser.name === mockUser.name &&
    //       returnedUser.email === mockUser.email
    //   )
    // );

    // expect(hasSomeMockedUsers).toBe(true);
  });
});
