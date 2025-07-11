const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

let currentDir = __dirname;

while (!fs.existsSync(path.join(currentDir, '.env'))) {
  const parentDir = path.dirname(currentDir);
  if (parentDir === currentDir) break;
  currentDir = parentDir;
}

dotenv.config({ path: path.join(currentDir, '.env') });
