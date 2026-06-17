const fs = require('fs');

const artifact = JSON.parse(fs.readFileSync('./blockchain/artifacts/contracts/DigitalLease.sol/DigitalLease.json', 'utf8'));
const abi = artifact.abi;
const abiStr = JSON.stringify(abi);

const newAddress = '0xD5D5D079011C94077Ef95d251B30523d23Eb27cC';

const constantsContent = `/**
 * Konfigurasi Smart Contract Digital Lease
 * 
 * Ganti CONTRACT_ADDRESS dengan alamat kontrak yang sudah di-deploy.
 * ABI menggunakan format human-readable Ethers.js v6.
 */

// Alamat kontrak — ganti setelah deploy
export const CONTRACT_ADDRESS = '${newAddress}'; // Deployed on Sepolia

// ABI kontrak (human-readable format Ethers.js v6)
export const CONTRACT_ABI = ${abiStr};

// Konfigurasi jaringan
export const SUPPORTED_CHAINS = {
  31337: {
    name: "Hardhat Local",
    rpcUrl: "http://127.0.0.1:8545",
    symbol: "ETH",
    blockExplorer: "",
  },
  11155111: {
    name: "Sepolia Testnet",
    rpcUrl: "https://rpc.sepolia.org",
    symbol: "SepoliaETH",
    blockExplorer: "https://sepolia.etherscan.io",
  },
};

// Konfigurasi default
export const DEFAULT_CHAIN_ID = 11155111;
export const RENT_AMOUNT_ETH = "0.05";
`;

fs.writeFileSync('./frontend/src/utils/constants.js', constantsContent, { encoding: 'utf8' });
console.log('constants.js fixed successfully!');
console.log('CONTRACT_ADDRESS:', newAddress);
console.log('ABI functions:', abi.filter(x => x.type === 'function').map(x => x.name).join(', '));
