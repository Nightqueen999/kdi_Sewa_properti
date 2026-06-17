const fs = require('fs');
const newAddress = '0xD5D5D079011C94077Ef95d251B30523d23Eb27cC';

// Update frontend constants.js
let c = fs.readFileSync('frontend/src/utils/constants.js', 'utf8');
c = c.replace(/export const CONTRACT_ADDRESS = '.*';/, `export const CONTRACT_ADDRESS = '${newAddress}';`);
fs.writeFileSync('frontend/src/utils/constants.js', c);

// Update backend .env
let env = fs.readFileSync('backend/.env', 'utf8');
env = env.replace(/CONTRACT_ADDRESS=.*/, `CONTRACT_ADDRESS=${newAddress}`);
fs.writeFileSync('backend/.env', env);

console.log('Update successful');
