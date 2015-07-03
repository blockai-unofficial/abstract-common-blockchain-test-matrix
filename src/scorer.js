var generateMatrix = require('./abstractCBMatrix.js');

var matrix;

function generateScores(callback){
  generateMatrix(false, function (m){
    matrix = m;
    score = {};
    var count = 0;
    matrix.forEach(function (apiProvider){
      score[apiProvider.name] = scoreProvider(apiProvider);

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
  

  /*****ADDRESSES TOTAL SCORE OF 35*********/

  //Address summary total of 
  score += (tests.Addresses.Summary.address) ? 3 : 0;
  score += (tests.Addresses.Summary.balance) ? 5 : 0;
  score += (tests.Addresses.Summary.totalRecieved) ? 2 : 0;
  score += (tests.Addresses.Summary.totalSent) ? 2: 0;
  score += (tests.Addresses.Summary.txCount) ? 3 : 0;

  //Address transactions
  score += (tests.Addresses.Transactions.blockHeight) ? 1 : 0;
  score += (tests.Addresses.Transactions.blockId) ? 2 : 0;
  score += (tests.Addresses.Transactions.hex) ? 1 : 0;
  score += (tests.Addresses.Transactions.txHex) ? 1 : 0;
  score += (tests.Addresses.Transactions.txid) ? 2 : 0;
  //score += (tests.Addresses.Transactions.txId) ? 1 : 0;
  
  //Address unspents
  score += (tests.Addresses.Unspents.address) ? 1 : 0;
  score += (tests.Addresses.Unspents.confirmations) ? 1 : 0;
  score += (tests.Addresses.Unspents.txid) ? 3 : 0;
  //score += (tests.Addresses.Unspents.txId) ? 1 : 0;
  score += (tests.Addresses.Unspents.value) ? 3 : 0;
  //score += (tests.Addresses.Unspents.amount) ? 1 : 0;
  score += (tests.Addresses.Unspents.vout) ? 3 : 0;
  score += (tests.Addresses.Unspents.scriptPubKey) ? 1 : 0;
  //*****ADDRESSES*********//

  

  /********BLOCKS TOTAL SCORE OF 15*********/
  //Blocks get
  score += (tests.Blocks.Get.blockHex) ? 2 : 0;
  score += (tests.Blocks.Get.blockId) ? 3 : 0;
  
  //Blocks latest
  score += (tests.Blocks.Latest.blockHex) ? 2 : 0;
  score += (tests.Blocks.Latest.blockId) ? 3 : 0;

  //Blocks Transactions
  score += (tests.Blocks.Transactions.blockId) ?  2: 0;
  score += (tests.Blocks.Transactions.txid) ? 3 : 0;
  //score += (tests.Blocks.Transactions.txId) ? 1 : 0;

  /********BLOCKS**********/


  /******TRANSACTIONS TOTAL SCORE OF 50***********/
  
  //Transactions get
  score += (tests.Transactions.Get.hex) ? 5 : 0;
  //score += (tests.Transactions.Get.txHex) ? 5 : 0;
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
  // score += (tests.Transactions.Latest.hex) ? 1 : 0;
  // score += (tests.Transactions.Latest.txHex) ? 1 : 0;
  score += (tests.Transactions.Latest.txid) ? 5 : 0;
  // score += (tests.Transactions.Latest.txId) ? 1 : 0;
  // score += (tests.Transactions.Latest.version) ? 1 : 0;
  // score += (tests.Transactions.Latest.locktime) ? 1 : 0;
  // score += (tests.Transactions.Latest.fee) ? 1 : 0;
  // score += (tests.Transactions.Latest.vin.txid) ? 1 : 0;
  // score += (tests.Transactions.Latest.vin.txId) ? 1 : 0;
  // score += (tests.Transactions.Latest.vin.vout) ? 1 : 0;
  // score += (tests.Transactions.Latest.vin.scriptSig.asm) ? 1 : 0;
  // score += (tests.Transactions.Latest.vin.scriptSig.hex) ? 1 : 0;
  // score += (tests.Transactions.Latest.vin.sequence) ? 1 : 0;
  // score += (tests.Transactions.Latest.vout.value) ? 1 : 0;
  // score += (tests.Transactions.Latest.vout.index) ? 1 : 0;
  // score += (tests.Transactions.Latest.vout.n) ? 1 : 0;
  // score += (tests.Transactions.Latest.vout.spentTxid) ? 1 : 0;
  // score += (tests.Transactions.Latest.vout.scriptPubKey.asm) ? 1 : 0;
  // score += (tests.Transactions.Latest.vout.scriptPubKey.hex) ? 1 : 0;
  // score += (tests.Transactions.Latest.vout.scriptPubKey.reqSigs) ? 1 : 0;
  // score += (tests.Transactions.Latest.vout.scriptPubKey.type) ? 1 : 0;
  // score += (tests.Transactions.Latest.vout.addresses) ? 1 : 0;
  // score += (tests.Transactions.Latest.confirmations) ? 1 : 0;
  // score += (tests.Transactions.Latest.blocktime) ? 1 : 0;
  // score += (tests.Transactions.Latest.blockhash) ? 1 : 0;
  // score += (tests.Transactions.Latest.blockindex) ? 1 : 0;
  // score += (tests.Transactions.Latest.timeReceived) ? 1 : 0;
  
  //Transactions Outputs
  score += (tests.Transactions.Outputs.scriptPubKey) ? 1 : 0;
  score += (tests.Transactions.Outputs.txid) ? 3 : 0;
  //score += (tests.Transactions.Outputs.txId) ? 1 : 0;
  score += (tests.Transactions.Outputs.value) ? 3 : 0;
  score += (tests.Transactions.Outputs.vout) ? 3 : 0;

  //Transactions status
  score += (tests.Transactions.Status.blockId) ? 3 : 0;
  score += (tests.Transactions.Status.txid) ? 2 : 0;
  // score += (tests.Transactions.Status.txId) ? 1 : 0;

  /********TRANSACTIONS*********/

  return score;
}


module.exports = generateScores;