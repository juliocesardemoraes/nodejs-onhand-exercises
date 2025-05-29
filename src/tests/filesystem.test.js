import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe("Teste de arquivos", () => {
  const filePath = path.join(__dirname, "../mocks/users.js");
  const fileExists = fs.existsSync(filePath);

  test("O arquivo src/mocks/users.js deve existir!", () => {
    expect(fileExists).toBe(true);
  });

  if (fileExists) {
    test("O arquivo mocks/users.js deve exportar um usersMock", async () => {
      const { usersMock } = await import(filePath);
      expect(typeof usersMock).toBe("object");
    });

    test("Você não pode alterar o array de users original dentro do mocks/users.js", async () => {
      const { usersMock } = await import(filePath);
      expect(typeof usersMock).toBe("object");
      const usersMockOriginal = [
        {
          id: 1,
          name: "Lucas Silva",
          email: "lucas.silva@example.com",
          birthdate: "1990-05-12",
          address: "Rua das Flores, 123, São Paulo - SP",
          active: true,
        },
        {
          id: 2,
          name: "Mariana Oliveira",
          email: "mariana.oliveira@example.com",
          birthdate: "1988-10-25",
          address: "Avenida Atlântica, 456, Rio de Janeiro - RJ",
          active: false,
        },
        {
          id: 3,
          name: "João Pereira",
          email: "joao.pereira@example.com",
          birthdate: "1995-07-03",
          address: "Rua Belo Horizonte, 789, Belo Horizonte - MG",
          active: true,
        },
        {
          id: 4,
          name: "Ana Souza",
          email: "ana.souza@example.com",
          birthdate: "1992-02-17",
          address: "Rua Curitiba, 101, Curitiba - PR",
          active: false,
        },
        {
          id: 5,
          name: "julio",
          email: "jcmcf2@gmail.com",
          birthdate: "1992-02-17",
          address: "Rua Curitiba, 101, Curitiba - PR",
          active: false,
        },
      ];
      expect(usersMock).toEqual(usersMockOriginal);
    });
  }
});
