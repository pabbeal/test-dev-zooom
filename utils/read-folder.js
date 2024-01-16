// note: fonction générée par codeium
import fs from 'node:fs';
export default function readFileInFolder(dir) {
  const files = fs.readdirSync(dir);
  // on pourrait protéger la fonction en filtrant par suffixe et ne garder que
  // les .png et .jpg
  
  return files;
}