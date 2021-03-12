require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar provide gesture fashion fringe sketch'; 
let testAccounts = [
"0x55ae990cc52156948d0e8510772314207d4fccd7f09719a9ebef225c94f8bc3c",
"0xefafb69e3b6eb48f28cc4733fb3815a5090faac90750aaf6f485b6d42a59a0ac",
"0x18df6298612772b09b9de036e658d88704c847026ae95c67ed908e76615d1f29",
"0x30196786f7aa046ecc7c48258e2ba3d31bb903a24921901e73c46c0666d8c237",
"0xe6407d122ebc5c129ba5c18ea3289160be28b88e6cff563e2d99df64b23cfd82",
"0xdbce7a69a3170cf39813ec06d1cf20292f6cd2c8f98f6ee26d9d70d1a96f38cb",
"0xb32db0cd07cf769115b2a21071135478b24732d703c4fa9af3423438fe68403d",
"0x136e64ba99d26bbb2f9242a4dabb2a85491f86b3ecd227eb3c7e33d70421de82",
"0x52a5171a6bbf24f17d882b47ed84252e20fa9bf4d59cb7790e81b0dac00ee378",
"0xfc0c0ec6305ae958c40a01dc027a0cdd62090a056a27c8fe1efe91766716dff4"
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
