require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain column install help food ghost'; 
let testAccounts = [
"0x1036b9b41a0defcd84e9df1555a6d31e82e55b5fe642c69312f7953baba20c93",
"0x9343c83e081f2f2d26692c31f471c310f15dca6beaefd3f4fde260caa8068355",
"0x2ba80840a00357e2aba4129a79c0dc1faca47f6b5e24f07744657e8ae5591b7a",
"0x2f4d5a1f4365e1ddb1d4ee3718493420bcaa31ca009070bf310df89b980943d9",
"0xa0a2255ba1d51cbb35c90ed861d27f18186f8c4b17f9bab94d927d29a4c96fc5",
"0x2a65966e2ec52bf80919e654c695c4c1749388828d7ea8617aef156cc2cbf771",
"0xe9d5fb6b4bba69172c9049d3a5f6c88a220c2c455e689e190efd7ec10b74f7e6",
"0x9ca9edc3d08c675955878a7a73910f7b39620b16aa7c6ef99f2ff3c43ded244d",
"0xaa59e44a2473e19f76efa8c27979dc98379bb84418161230ad8f11456160318f",
"0x94e519ef2a72a0b8295cebf7799ce21ce00a8244706f1bb3700eb8a28b389770"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
