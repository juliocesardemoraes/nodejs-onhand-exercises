import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('Teste de arquivos', () => {
  const filePath = path.join(__dirname, '../routes.js');
  const fileExists = fs.existsSync(filePath);

  test('O arquivo src/routes.js deve existir!', () => {
    expect(fileExists).toBe(true);
  });

  if (fileExists) {
    test('O arquivo routes.js deve exportar um router do expressjs chamado nameRouter', async () => {
      const { nameRouter } = await import(filePath);
      expect(typeof nameRouter).toBe('function');
    });
  }
});
