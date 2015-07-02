var testInstanceCreator = require('./test-instance.js');

//abstract common blockchain adapters
var biteasy = require("biteasy-unofficial");
var blockchaininfo = require("blockchaininfo-unofficial");
var blockcypher = require("blockcypher-unofficial");
var blockr = require("blockr-unofficial");
var blocktrail = require("blocktrail-unofficial");
var chain = require("chain-unofficial");

var biteasyMainnet = biteasy({
  network: "mainnet"
});
var biteasyTestnet = biteasy({
  network: "testnet"
});

var blockchaininfoMainnet = blockchaininfo(); 

var blockcypherMainnet = blockcypher({
  network: "mainnet"
});
var blockcypherTestnet = blockcypher({
  network: "testnet"
});

var blockrMainnet = blockr();

var blocktrailMainnet = blocktrail({
  network: "mainnet",
  apiKey: process.env.BLOCKTRAIL_API_KEY_ID,
  apiSecret: process.env.BLOCKTRAIL_API_KEY_SECRET
});
var blocktrailTestnet = blocktrail({
  network: "testnet",
  apiKey: process.env.BLOCKTRAIL_API_KEY_ID,
  apiSecret: process.env.BLOCKTRAIL_API_KEY_SECRET
});

var chainMainnet = chain({
  network: "testnet", 
  key: process.env.CHAIN_API_KEY_ID, 
  secret: process.env.CHAIN_API_KEY_SECRET
});
var chainTestnet = chain({
  network: "bitcoin", 
  key: process.env.CHAIN_API_KEY_ID, 
  secret: process.env.CHAIN_API_KEY_SECRET
});



var testMatrix = [
  {
    name: "biteasyMainnet",
    network: "mainnet",
    client: biteasyMainnet,
    test: testInstanceCreator(),
  },
  {
    name: "biteasyTestnet",
    network: "testnet",
    client: biteasyTestnet,
    test: testInstanceCreator(),
  },
  {
    name: "blockchaininfoMainnet",
    network: "mainnet",
    client: blockchaininfoMainnet,
    test: testInstanceCreator(),
  },
  {
    name: "blockcypherMainnet",
    network: "mainnet",
    client: blockcypherMainnet,
    test: testInstanceCreator(),
  },
  {
    name: "blockcypherTestnet",
    network: "testnet",
    client: blockcypherTestnet,
    test: testInstanceCreator(),
  },
  {
    name: "blockrMainnet",
    network: "mainnet",
    client: blockrMainnet,
    test: testInstanceCreator(),
  },
  {
    name: "blocktrailMainnet",
    network: "mainnet",
    client: blocktrailMainnet,
    test: testInstanceCreator(),
  },
  {
    name: "blocktrailTestnet",
    network: "testnet",
    client: blocktrailTestnet,
    test: testInstanceCreator(),
  },
  {
    name: "chainMainnet",
    network: "mainnet",
    client: chainMainnet,
    test: testInstanceCreator(),
  },
  {
    name: "chainTestnet",
    network: "testnet",
    client: chainTestnet,
    test: testInstanceCreator(),
  }
];


function fillTestInstance(apiProvider, callback) {
  var count = 0;
  var testInstance = apiProvider.test;
  var address = (apiProvider.network === "mainnet") ? "1HUTmSsFp9Rg4FYRftp85GGyZFEndZSoeq" : "n3PDRtKoHXHNt8FU17Uu9Te81AnKLa7oyU";
  var blockId = (apiProvider.network === "mainnet") ? "00000000000000000a6e36f5f310f7c01a58a1c3d3f2dd63873379e03a937424" : "0000000002d9daeab13dd9bf375bb6851824f39b95da84b4f024a278b0164ac6";
  var txid = (apiProvider.network === "mainnet") ? "c3e5f13833ab30fdeff02582db0ecba59a35c3512f6fe3fa0326aebafafa49a0" : "bbca54add4a55dd6086df741e3f89288f290a94d69ebb932a140262450b2ebcf";


  apiProvider.client.Addresses.Summary([address], function (err, resp){
    if (!err) {
      testInstance.address.address = (resp[0].address != null);
      testInstance.address.balance = (resp[0].balance != null);
      testInstance.address.totalReceived = (resp[0].totalReceived != null);
      testInstance.address.totalSent = (resp[0].totalSent != null);
      testInstance.address.txCount = (resp[0].txCount != null);
    }
    if (++ count === 4){
      callback();
    }
  });

  apiProvider.client.Addresses.Unspents([address], function (err, resp){
    if (!err) {
      var unspentObj = resp[0][0];
      testInstance.unspent.txid = (unspentObj.txid != null);
      testInstance.unspent.txId = (unspentObj.txId != null);
      testInstance.unspent.address = (unspentObj.address != null);
      testInstance.unspent.scriptPubKey = (unspentObj.scriptPubKey != null);
      testInstance.unspent.amount = (unspentObj.amount != null);
      testInstance.unspent.value = (unspentObj.value != null);
      testInstance.unspent.confirmations = (unspentObj.confirmations != null);
    }
    if (++ count === 4){
      callback();
    }
  });

  apiProvider.client.Transactions.Get([txid], function (err, resp){
    if (!err) {
      var transactionObj = resp[0];
      testInstance.transaction.hex = (transactionObj.hex != null);
      testInstance.transaction.txHex = (transactionObj.txHex != null);
      testInstance.transaction.txid = (transactionObj.txid != null);
      testInstance.transaction.txId = (transactionObj.txId != null);
      testInstance.transaction.version = (transactionObj.version != null);
      testInstance.transaction.locktime = (transactionObj.locktime != null);
      testInstance.transaction.fee = (transactionObj.fee != null);

      testInstance.transaction.vin.txid = (transactionObj.vin[0].txid != null);
      testInstance.transaction.vin.txId = (transactionObj.vin[0].txId != null);
      testInstance.transaction.vin.vout = (transactionObj.vin[0].vout != null);
      testInstance.transaction.vin.scriptSig.asm = (transactionObj.vin[0].scriptSig.asm != null);
      testInstance.transaction.vin.scriptSig.hex = (transactionObj.vin[0].scriptSig.hex != null);
      testInstance.transaction.vin.sequence = (transactionObj.vin[0].sequence != null);

      testInstance.transaction.vout.value = (transactionObj.vout[0].value != null);
      testInstance.transaction.vout.index = (transactionObj.vout[0].index  != null);
      testInstance.transaction.vout.n = (transactionObj.vout[0].n != null);
      testInstance.transaction.vout.spentTxid = (transactionObj.vout[0].spentTxid != null);
      testInstance.transaction.vout.scriptPubKey.asm = (transactionObj.vout[0].scriptPubKey.asm != null);
      testInstance.transaction.vout.scriptPubKey.hex = (transactionObj.vout[0].scriptPubKey.hex != null);
      testInstance.transaction.vout.scriptPubKey.reqSigs = (transactionObj.vout[0].scriptPubKey.reqSigs != null);
      testInstance.transaction.vout.scriptPubKey.type = (transactionObj.vout[0].scriptPubKey.type != null);
      testInstance.transaction.vout.addresses = (transactionObj.vout[0].addresses != null);

      testInstance.transaction.confirmations = (transactionObj.confirmations != null);
      testInstance.transaction.blocktime = (transactionObj.blocktime != null);
      testInstance.transaction.blockhash = (transactionObj.blockhash != null);
      testInstance.transaction.blockindex = (transactionObj.blockindex != null);
      testInstance.transaction.timeReceived = (transactionObj.timeReceived != null);
    }
    if (++ count === 4){
      callback();
    }
  });

  apiProvider.client.Blocks.Get([blockId], function (err, resp){
    if (!err) {
      var blockObj = resp[0];
      testInstance.block.blockHex = (blockObj.blockHex != null);
      testInstance.block.blockId = (blockObj.blockId != null);
    }
    if (++ count === 4){
      callback();
    }
  });
}

function populateMatrix(callback){
  var apiCount = 0;
  testMatrix.forEach(function (apiProvider){
    fillTestInstance(apiProvider, function(){
      if(++apiCount === testMatrix.length){
        callback(testMatrix);
      }
    });
  });
}


populateMatrix(function(testMatrix){
  console.log(JSON.stringify(testMatrix));
});


module.exports = populateMatrix;











