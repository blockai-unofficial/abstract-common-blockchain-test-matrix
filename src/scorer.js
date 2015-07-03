var generateMatrix = require('./abstractCBTester.js');

var matrix;

function generateScores(callback){
  generateMatrix(function (m){
    matrix = m;
    score = [];
    var count = 0;
    matrix.forEach(function (apiProvider){
      var entry = {};
      entry[apiProvider.name] = scoreProvider(apiProvider);
      score.push(entry);

      if(++count === matrix.length){
        callback(score);
      }
    });
  });
}


//score a api provider on a somewhat subjective basis on importance
//of certain fields specified by abstract-common-blockchain
function scoreProvider(apiProviderObj){
  var tests = apiProviderObj.test;
  var score = 0;

  //Address summary
  score += (tests.Addresses.Summary.address) ? 1 : 0;
  score += (tests.Addresses.Summary.balance) ? 1 : 0;
  score += (tests.Addresses.Summary.totalRecieved) ? 1 : 0;
  score += (tests.Addresses.Summary.totalSent) ? 1 : 0;
  score += (tests.Addresses.Summary.txCount) ? 1 : 0;

  //Address transcations
  score += (tests.Addresses.Transactions.blockHeight) ? 1 : 0;
  score += (tests.Addresses.Transactions.blockId) ? 1 : 0;
  score += (tests.Addresses.Transactions.hex) ? 1 : 0;
  score += (tests.Addresses.Transactions.txHex) ? 1 : 0;
  score += (tests.Addresses.Transactions.txid) ? 1 : 0;
  score += (tests.Addresses.Transactions.txId) ? 1 : 0;
  
  //Address unspents
  score += (tests.Addresses.Unspents.address) ? 1 : 0;
  score += (tests.Addresses.Unspents.confirmations) ? 1 : 0;
  score += (tests.Addresses.Unspents.txid) ? 1 : 0;
  score += (tests.Addresses.Unspents.txId) ? 1 : 0;
  score += (tests.Addresses.Unspents.value) ? 1 : 0;
  score += (tests.Addresses.Unspents.amount) ? 1 : 0;
  score += (tests.Addresses.Unspents.vout) ? 1 : 0;
  score += (tests.Addresses.Unspents.scriptPubKey) ? 1 : 0;
  
  //Blocks get
  score += (tests.Blocks.Get.blockHex) ? 1 : 0;
  score += (tests.Blocks.Get.blockId) ? 1 : 0;
  
  //Blocks latest
  score += (tests.Blocks.Latest.blockHex) ? 1 : 0;
  score += (tests.Blocks.Latest.blockId) ? 1 : 0;

  //Blocks Transactions
  score += (tests.Blocks.Transactions.blockId) ? 1 : 0;
  score += (tests.Blocks.Transactions.txid) ? 1 : 0;
  score += (tests.Blocks.Transactions.txId) ? 1 : 0;
  
  //Transactions get
  score += (tests.Transactions.Get.hex) ? 1 : 0;
  score += (tests.Transactions.Get.txHex) ? 1 : 0;
  score += (tests.Transactions.Get.txid) ? 1 : 0;
  score += (tests.Transactions.Get.txId) ? 1 : 0;
  score += (tests.Transactions.Get.version) ? 1 : 0;
  score += (tests.Transactions.Get.locktime) ? 1 : 0;
  score += (tests.Transactions.Get.fee) ? 1 : 0;
  score += (tests.Transactions.Get.vin.txid) ? 1 : 0;
  score += (tests.Transactions.Get.vin.txId) ? 1 : 0;
  score += (tests.Transactions.Get.vin.vout) ? 1 : 0;
  score += (tests.Transactions.Get.vin.scriptSig.asm) ? 1 : 0;
  score += (tests.Transactions.Get.vin.scriptSig.hex) ? 1 : 0;
  score += (tests.Transactions.Get.vin.sequence) ? 1 : 0;
  score += (tests.Transactions.Get.vout.value) ? 1 : 0;
  score += (tests.Transactions.Get.vout.index) ? 1 : 0;
  score += (tests.Transactions.Get.vout.n) ? 1 : 0;
  score += (tests.Transactions.Get.vout.spentTxid) ? 1 : 0;
  score += (tests.Transactions.Get.vout.scriptPubKey.asm) ? 1 : 0;
  score += (tests.Transactions.Get.vout.scriptPubKey.hex) ? 1 : 0;
  score += (tests.Transactions.Get.vout.scriptPubKey.reqSigs) ? 1 : 0;
  score += (tests.Transactions.Get.vout.scriptPubKey.type) ? 1 : 0;
  score += (tests.Transactions.Get.vout.addresses) ? 1 : 0;
  score += (tests.Transactions.Get.confirmations) ? 1 : 0;
  score += (tests.Transactions.Get.blocktime) ? 1 : 0;
  score += (tests.Transactions.Get.blockhash) ? 1 : 0;
  score += (tests.Transactions.Get.blockindex) ? 1 : 0;
  score += (tests.Transactions.Get.timeReceived) ? 1 : 0;


  //Transactions Latest
  score += (tests.Transactions.Latest.hex) ? 1 : 0;
  score += (tests.Transactions.Latest.txHex) ? 1 : 0;
  score += (tests.Transactions.Latest.txid) ? 1 : 0;
  score += (tests.Transactions.Latest.txId) ? 1 : 0;
  score += (tests.Transactions.Latest.version) ? 1 : 0;
  score += (tests.Transactions.Latest.locktime) ? 1 : 0;
  score += (tests.Transactions.Latest.fee) ? 1 : 0;
  score += (tests.Transactions.Latest.vin.txid) ? 1 : 0;
  score += (tests.Transactions.Latest.vin.txId) ? 1 : 0;
  score += (tests.Transactions.Latest.vin.vout) ? 1 : 0;
  score += (tests.Transactions.Latest.vin.scriptSig.asm) ? 1 : 0;
  score += (tests.Transactions.Latest.vin.scriptSig.hex) ? 1 : 0;
  score += (tests.Transactions.Latest.vin.sequence) ? 1 : 0;
  score += (tests.Transactions.Latest.vout.value) ? 1 : 0;
  score += (tests.Transactions.Latest.vout.index) ? 1 : 0;
  score += (tests.Transactions.Latest.vout.n) ? 1 : 0;
  score += (tests.Transactions.Latest.vout.spentTxid) ? 1 : 0;
  score += (tests.Transactions.Latest.vout.scriptPubKey.asm) ? 1 : 0;
  score += (tests.Transactions.Latest.vout.scriptPubKey.hex) ? 1 : 0;
  score += (tests.Transactions.Latest.vout.scriptPubKey.reqSigs) ? 1 : 0;
  score += (tests.Transactions.Latest.vout.scriptPubKey.type) ? 1 : 0;
  score += (tests.Transactions.Latest.vout.addresses) ? 1 : 0;
  score += (tests.Transactions.Latest.confirmations) ? 1 : 0;
  score += (tests.Transactions.Latest.blocktime) ? 1 : 0;
  score += (tests.Transactions.Latest.blockhash) ? 1 : 0;
  score += (tests.Transactions.Latest.blockindex) ? 1 : 0;
  score += (tests.Transactions.Latest.timeReceived) ? 1 : 0;
  
  //Transactions Outputs
  score += (tests.Transactions.Outputs.scriptPubKey) ? 1 : 0;
  score += (tests.Transactions.Outputs.txid) ? 1 : 0;
  score += (tests.Transactions.Outputs.txId) ? 1 : 0;
  score += (tests.Transactions.Outputs.value) ? 1 : 0;
  score += (tests.Transactions.Outputs.vout) ? 1 : 0;

  //Transactions status
  score += (tests.Transactions.Status.blockId) ? 1 : 0;
  score += (tests.Transactions.Status.txid) ? 1 : 0;
  score += (tests.Transactions.Status.txId) ? 1 : 0;

  return score;
}


module.exports(generateScores);