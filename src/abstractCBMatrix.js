var abstractCBTester = require('./abstractCBTester.js');

var abstractCBMatrix = function (update, callback) {
  if (update) {
    abstractCBTester(function (updatedMatrix) {
      callback(updatedMatrix);
    });
  }
  else {
    callback(matrix);
  }
}

var matrix = [{"name":"biteasyMainnet","network":"mainnet","client":{"Addresses":{},"Blocks":{},"Transactions":{}},"test":{"Addresses":{"Summary":{"address":true,"balance":true,"totalReceived":true,"totalSent":true,"txCount":true},"Transactions":{"blockHeight":true,"blockId":true,"hex":false,"txHex":false,"txid":true,"txId":true},"Unspents":{"address":true,"confirmations":false,"txid":true,"txId":true,"value":true,"amount":true,"vout":true,"scriptPubKey":true}},"Blocks":{"Get":{"blockHex":false,"blockId":true},"Latest":{"blockHex":false,"blockId":true},"Propagate":{},"Transactions":{"blockId":true,"txid":false,"txId":false}},"Transactions":{"Get":{"hex":false,"txHex":false,"txid":true,"txId":true,"version":true,"locktime":false,"fee":true,"vin":{"txid":true,"txId":true,"vout":true,"addresses":true,"scriptSig":{"asm":true,"hex":true},"sequence":false},"vout":{"value":true,"index":true,"n":true,"spentTxid":false,"scriptPubKey":{"asm":true,"hex":true,"reqSigs":false,"type":false,"addresses":false},"addresses":false},"blocktime":false,"blockhash":true,"blockindex":false,"confirmations":false,"timeReceived":true},"Latest":{"hex":false,"txHex":false,"txid":true,"txId":true,"version":true,"locktime":false,"fee":true,"vin":{"txid":true,"txId":true,"vout":true,"addresses":true,"scriptSig":{"asm":true,"hex":true},"sequence":false},"vout":{"value":true,"index":true,"n":true,"spentTxid":false,"scriptPubKey":{"asm":false,"hex":false,"reqSigs":false,"type":false,"addresses":false},"addresses":false},"blocktime":true,"blockhash":true,"blockindex":true,"confirmations":true,"timeReceived":true},"Outputs":{"scriptPubKey":true,"txid":true,"txId":true,"value":true,"vout":true},"Propagate":{},"Status":{"blockId":true,"txid":true,"txId":true}}}},{"name":"biteasyTestnet","network":"testnet","client":{"Addresses":{},"Blocks":{},"Transactions":{}},"test":{"Addresses":{"Summary":{"address":true,"balance":true,"totalReceived":true,"totalSent":true,"txCount":true},"Transactions":{"blockHeight":true,"blockId":true,"hex":false,"txHex":false,"txid":true,"txId":true},"Unspents":{"address":true,"confirmations":false,"txid":true,"txId":true,"value":true,"amount":true,"vout":true,"scriptPubKey":true}},"Blocks":{"Get":{"blockHex":false,"blockId":true},"Latest":{"blockHex":false,"blockId":true},"Propagate":{},"Transactions":{"blockId":true,"txid":false,"txId":false}},"Transactions":{"Get":{"hex":false,"txHex":false,"txid":true,"txId":true,"version":true,"locktime":false,"fee":true,"vin":{"txid":true,"txId":true,"vout":true,"addresses":true,"scriptSig":{"asm":true,"hex":true},"sequence":false},"vout":{"value":true,"index":true,"n":true,"spentTxid":false,"scriptPubKey":{"asm":true,"hex":true,"reqSigs":false,"type":false,"addresses":false},"addresses":false},"blocktime":false,"blockhash":true,"blockindex":false,"confirmations":false,"timeReceived":true},"Latest":{"hex":false,"txHex":false,"txid":true,"txId":true,"version":true,"locktime":false,"fee":true,"vin":{"txid":true,"txId":true,"vout":true,"addresses":true,"scriptSig":{"asm":true,"hex":true},"sequence":false},"vout":{"value":true,"index":true,"n":true,"spentTxid":false,"scriptPubKey":{"asm":false,"hex":false,"reqSigs":false,"type":false,"addresses":false},"addresses":false},"blocktime":true,"blockhash":true,"blockindex":true,"confirmations":true,"timeReceived":true},"Outputs":{"scriptPubKey":true,"txid":true,"txId":true,"value":true,"vout":true},"Propagate":{},"Status":{"blockId":true,"txid":true,"txId":true}}}},{"name":"blockchaininfoMainnet","network":"mainnet","client":{"Addresses":{},"Blocks":{},"Transactions":{}},"test":{"Addresses":{"Summary":{"address":true,"balance":true,"totalReceived":true,"totalSent":true,"txCount":true},"Transactions":{"blockHeight":true,"blockId":false,"hex":false,"txHex":false,"txid":true,"txId":true},"Unspents":{"address":true,"confirmations":true,"txid":true,"txId":true,"value":true,"amount":true,"vout":true,"scriptPubKey":true}},"Blocks":{"Get":{"blockHex":false,"blockId":true},"Latest":{"blockHex":false,"blockId":true},"Propagate":{},"Transactions":{"blockId":true,"txid":true,"txId":true}},"Transactions":{"Get":{"hex":true,"txHex":true,"txid":true,"txId":true,"version":true,"locktime":true,"fee":true,"vin":{"txid":false,"txId":false,"vout":true,"addresses":true,"scriptSig":{"asm":false,"hex":true},"sequence":true},"vout":{"value":true,"index":true,"n":true,"spentTxid":false,"scriptPubKey":{"asm":false,"hex":true,"reqSigs":false,"type":false,"addresses":false},"addresses":false},"blocktime":false,"blockhash":false,"blockindex":false,"confirmations":false,"timeReceived":true},"Latest":{"hex":true,"txHex":true,"txid":true,"txId":true,"version":true,"locktime":true,"fee":true,"vin":{"txid":false,"txId":false,"vout":true,"addresses":true,"scriptSig":{"asm":false,"hex":true},"sequence":true},"vout":{"value":true,"index":true,"n":true,"spentTxid":false,"scriptPubKey":{"asm":false,"hex":true,"reqSigs":false,"type":false,"addresses":false},"addresses":false},"blocktime":true,"blockhash":true,"blockindex":true,"confirmations":false,"timeReceived":true},"Outputs":{"scriptPubKey":true,"txid":true,"txId":true,"value":true,"vout":true},"Propagate":{},"Status":{"blockId":false,"txid":true,"txId":true}}}},{"name":"blockcypherMainnet","network":"mainnet","client":{"Addresses":{},"Blocks":{},"Transactions":{}},"test":{"Addresses":{"Summary":{"address":true,"balance":true,"totalReceived":true,"totalSent":true,"txCount":true},"Transactions":{"blockHeight":true,"blockId":true,"hex":true,"txHex":true,"txid":true,"txId":true},"Unspents":{"address":true,"confirmations":true,"txid":true,"txId":true,"value":true,"amount":true,"vout":true,"scriptPubKey":false}},"Blocks":{"Get":{"blockHex":false,"blockId":true},"Latest":{"blockHex":false,"blockId":true},"Propagate":{},"Transactions":{"blockId":false,"txid":false,"txId":false}},"Transactions":{"Get":{"hex":true,"txHex":true,"txid":true,"txId":true,"version":true,"locktime":true,"fee":true,"vin":{"txid":true,"txId":true,"vout":true,"addresses":true,"scriptSig":{"asm":false,"hex":true},"sequence":true},"vout":{"value":true,"index":true,"n":true,"spentTxid":true,"scriptPubKey":{"asm":false,"hex":true,"reqSigs":true,"type":true,"addresses":false},"addresses":false},"blocktime":true,"blockhash":true,"blockindex":false,"confirmations":true,"timeReceived":true},"Latest":{"hex":true,"txHex":true,"txid":true,"txId":true,"version":true,"locktime":true,"fee":true,"vin":{"txid":true,"txId":true,"vout":true,"addresses":true,"scriptSig":{"asm":false,"hex":true},"sequence":true},"vout":{"value":true,"index":true,"n":true,"spentTxid":true,"scriptPubKey":{"asm":false,"hex":true,"reqSigs":true,"type":true,"addresses":false},"addresses":false},"blocktime":true,"blockhash":true,"blockindex":true,"confirmations":true,"timeReceived":true},"Outputs":{"scriptPubKey":true,"txid":true,"txId":true,"value":true,"vout":true},"Propagate":{},"Status":{"blockId":true,"txid":true,"txId":true}}}},{"name":"blockcypherTestnet","network":"testnet","client":{"Addresses":{},"Blocks":{},"Transactions":{}},"test":{"Addresses":{"Summary":{"address":true,"balance":true,"totalReceived":true,"totalSent":true,"txCount":true},"Transactions":{"blockHeight":true,"blockId":true,"hex":true,"txHex":true,"txid":true,"txId":true},"Unspents":{"address":true,"confirmations":true,"txid":true,"txId":true,"value":true,"amount":true,"vout":true,"scriptPubKey":false}},"Blocks":{"Get":{"blockHex":false,"blockId":true},"Latest":{"blockHex":false,"blockId":true},"Propagate":{},"Transactions":{"blockId":false,"txid":false,"txId":false}},"Transactions":{"Get":{"hex":true,"txHex":true,"txid":true,"txId":true,"version":true,"locktime":true,"fee":true,"vin":{"txid":true,"txId":true,"vout":true,"addresses":true,"scriptSig":{"asm":false,"hex":true},"sequence":true},"vout":{"value":true,"index":true,"n":true,"spentTxid":true,"scriptPubKey":{"asm":false,"hex":true,"reqSigs":true,"type":true,"addresses":false},"addresses":false},"blocktime":true,"blockhash":true,"blockindex":false,"confirmations":true,"timeReceived":true},"Latest":{"hex":true,"txHex":true,"txid":true,"txId":true,"version":true,"locktime":true,"fee":true,"vin":{"txid":true,"txId":true,"vout":true,"addresses":true,"scriptSig":{"asm":false,"hex":true},"sequence":true},"vout":{"value":true,"index":true,"n":true,"spentTxid":true,"scriptPubKey":{"asm":false,"hex":true,"reqSigs":true,"type":true,"addresses":false},"addresses":false},"blocktime":true,"blockhash":true,"blockindex":true,"confirmations":true,"timeReceived":true},"Outputs":{"scriptPubKey":true,"txid":true,"txId":true,"value":true,"vout":true},"Propagate":{},"Status":{"blockId":true,"txid":true,"txId":true}}}},{"name":"blockrMainnet","network":"mainnet","client":{"Addresses":{},"Blocks":{},"Transactions":{}},"test":{"Addresses":{"Summary":{"address":true,"balance":true,"totalReceived":true,"totalSent":false,"txCount":true},"Transactions":{"blockHeight":false,"blockId":false,"hex":false,"txHex":false,"txid":true,"txId":true},"Unspents":{"address":true,"confirmations":true,"txid":true,"txId":true,"value":true,"amount":true,"vout":true,"scriptPubKey":true}},"Blocks":{"Get":{"blockHex":false,"blockId":true},"Latest":{"blockHex":false,"blockId":true},"Propagate":{},"Transactions":{"blockId":true,"txid":true,"txId":true}},"Transactions":{"Get":{"hex":false,"txHex":false,"txid":true,"txId":true,"version":false,"locktime":false,"fee":true,"vin":{"txid":true,"txId":true,"vout":true,"addresses":true,"scriptSig":{"asm":false,"hex":false},"sequence":false},"vout":{"value":true,"index":true,"n":true,"spentTxid":false,"scriptPubKey":{"asm":false,"hex":false,"reqSigs":false,"type":false,"addresses":false},"addresses":false},"blocktime":false,"blockhash":false,"blockindex":true,"confirmations":true,"timeReceived":true},"Latest":{"hex":false,"txHex":false,"txid":false,"txId":false,"version":false,"locktime":false,"fee":false,"vin":{"txid":false,"txId":false,"vout":false,"addresses":false,"scriptSig":{"asm":false,"hex":false},"sequence":false},"vout":{"value":false,"index":false,"n":false,"spentTxid":false,"scriptPubKey":{"asm":false,"hex":false,"reqSigs":false,"type":false,"addresses":false}},"blocktime":false,"blockhash":false,"blockindex":false,"confirmations":false,"timeReceived":false},"Outputs":{"scriptPubKey":false,"txid":true,"txId":true,"value":true,"vout":true},"Propagate":{},"Status":{"blockId":true,"txid":true,"txId":true}}}},{"name":"blocktrailMainnet","network":"mainnet","client":{"Addresses":{},"Blocks":{},"Transactions":{}},"test":{"Addresses":{"Summary":{"address":true,"balance":true,"totalReceived":true,"totalSent":true,"txCount":true},"Transactions":{"blockHeight":true,"blockId":true,"hex":false,"txHex":false,"txid":true,"txId":true},"Unspents":{"address":true,"confirmations":true,"txid":true,"txId":true,"value":true,"amount":true,"vout":true,"scriptPubKey":true}},"Blocks":{"Get":{"blockHex":false,"blockId":true},"Latest":{"blockHex":false,"blockId":true},"Propagate":{},"Transactions":{"blockId":true,"txid":true,"txId":true}},"Transactions":{"Get":{"hex":true,"txHex":true,"txid":true,"txId":true,"version":false,"locktime":false,"fee":true,"vin":{"txid":true,"txId":true,"vout":true,"addresses":true,"scriptSig":{"asm":false,"hex":true},"sequence":false},"vout":{"value":true,"index":true,"n":true,"spentTxid":true,"scriptPubKey":{"asm":true,"hex":true,"reqSigs":false,"type":true,"addresses":false},"addresses":false},"blocktime":true,"blockhash":true,"blockindex":true,"confirmations":true,"timeReceived":true},"Latest":{"hex":false,"txHex":false,"txid":false,"txId":false,"version":false,"locktime":false,"fee":false,"vin":{"txid":false,"txId":false,"vout":false,"addresses":false,"scriptSig":{"asm":false,"hex":false},"sequence":false},"vout":{"value":false,"index":false,"n":false,"spentTxid":false,"scriptPubKey":{"asm":false,"hex":false,"reqSigs":false,"type":false,"addresses":false}},"blocktime":false,"blockhash":false,"blockindex":false,"confirmations":false,"timeReceived":false},"Outputs":{"scriptPubKey":false,"txid":true,"txId":true,"value":true,"vout":true},"Propagate":{},"Status":{"blockId":true,"txid":true,"txId":true}}}},{"name":"blocktrailTestnet","network":"testnet","client":{"Addresses":{},"Blocks":{},"Transactions":{}},"test":{"Addresses":{"Summary":{"address":true,"balance":true,"totalReceived":true,"totalSent":true,"txCount":true},"Transactions":{"blockHeight":true,"blockId":true,"hex":false,"txHex":false,"txid":true,"txId":true},"Unspents":{"address":true,"confirmations":true,"txid":true,"txId":true,"value":true,"amount":true,"vout":true,"scriptPubKey":true}},"Blocks":{"Get":{"blockHex":false,"blockId":true},"Latest":{"blockHex":false,"blockId":true},"Propagate":{},"Transactions":{"blockId":true,"txid":true,"txId":true}},"Transactions":{"Get":{"hex":true,"txHex":true,"txid":true,"txId":true,"version":false,"locktime":false,"fee":true,"vin":{"txid":true,"txId":true,"vout":true,"addresses":true,"scriptSig":{"asm":false,"hex":true},"sequence":false},"vout":{"value":true,"index":true,"n":true,"spentTxid":true,"scriptPubKey":{"asm":true,"hex":true,"reqSigs":false,"type":true,"addresses":false},"addresses":false},"blocktime":true,"blockhash":true,"blockindex":true,"confirmations":true,"timeReceived":true},"Latest":{"hex":false,"txHex":false,"txid":false,"txId":false,"version":false,"locktime":false,"fee":false,"vin":{"txid":false,"txId":false,"vout":false,"addresses":false,"scriptSig":{"asm":false,"hex":false},"sequence":false},"vout":{"value":false,"index":false,"n":false,"spentTxid":false,"scriptPubKey":{"asm":false,"hex":false,"reqSigs":false,"type":false,"addresses":false}},"blocktime":false,"blockhash":false,"blockindex":false,"confirmations":false,"timeReceived":false},"Outputs":{"scriptPubKey":false,"txid":true,"txId":true,"value":true,"vout":true},"Propagate":{},"Status":{"blockId":true,"txid":true,"txId":true}}}},{"name":"chainMainnet","network":"mainnet","client":{"Addresses":{},"Blocks":{},"Transactions":{}},"test":{"Addresses":{"Summary":{"address":true,"balance":true,"totalReceived":true,"totalSent":true,"txCount":false},"Transactions":{"blockHeight":true,"blockId":true,"hex":false,"txHex":false,"txid":true,"txId":true},"Unspents":{"address":true,"confirmations":true,"txid":true,"txId":true,"value":true,"amount":true,"vout":true,"scriptPubKey":true}},"Blocks":{"Get":{"blockHex":false,"blockId":true},"Latest":{"blockHex":false,"blockId":true},"Propagate":{},"Transactions":{"blockId":true,"txid":true,"txId":true}},"Transactions":{"Get":{"hex":false,"txHex":false,"txid":true,"txId":true,"version":false,"locktime":true,"fee":true,"vin":{"txid":true,"txId":true,"vout":true,"addresses":true,"scriptSig":{"asm":false,"hex":true},"sequence":false},"vout":{"value":true,"index":true,"n":true,"spentTxid":true,"scriptPubKey":{"asm":true,"hex":true,"reqSigs":true,"type":true,"addresses":false},"addresses":false},"blocktime":true,"blockhash":true,"blockindex":false,"confirmations":true,"timeReceived":true},"Latest":{"hex":false,"txHex":false,"txid":false,"txId":false,"version":false,"locktime":false,"fee":false,"vin":{"txid":false,"txId":false,"vout":false,"addresses":false,"scriptSig":{"asm":false,"hex":false},"sequence":false},"vout":{"value":false,"index":false,"n":false,"spentTxid":false,"scriptPubKey":{"asm":false,"hex":false,"reqSigs":false,"type":false,"addresses":false}},"blocktime":false,"blockhash":false,"blockindex":false,"confirmations":false,"timeReceived":false},"Outputs":{"scriptPubKey":true,"txid":true,"txId":true,"value":true,"vout":true},"Propagate":{},"Status":{"blockId":true,"txid":true,"txId":true}}}},{"name":"chainTestnet","network":"testnet","client":{"Addresses":{},"Blocks":{},"Transactions":{}},"test":{"Addresses":{"Summary":{"address":true,"balance":true,"totalReceived":true,"totalSent":true,"txCount":false},"Transactions":{"blockHeight":true,"blockId":true,"hex":false,"txHex":false,"txid":true,"txId":true},"Unspents":{"address":true,"confirmations":true,"txid":true,"txId":true,"value":true,"amount":true,"vout":true,"scriptPubKey":true}},"Blocks":{"Get":{"blockHex":false,"blockId":true},"Latest":{"blockHex":false,"blockId":true},"Propagate":{},"Transactions":{"blockId":true,"txid":true,"txId":true}},"Transactions":{"Get":{"hex":false,"txHex":false,"txid":true,"txId":true,"version":false,"locktime":true,"fee":true,"vin":{"txid":true,"txId":true,"vout":true,"addresses":true,"scriptSig":{"asm":false,"hex":true},"sequence":false},"vout":{"value":true,"index":true,"n":true,"spentTxid":true,"scriptPubKey":{"asm":true,"hex":true,"reqSigs":true,"type":true,"addresses":false},"addresses":false},"blocktime":true,"blockhash":true,"blockindex":false,"confirmations":true,"timeReceived":true},"Latest":{"hex":false,"txHex":false,"txid":false,"txId":false,"version":false,"locktime":false,"fee":false,"vin":{"txid":false,"txId":false,"vout":false,"addresses":false,"scriptSig":{"asm":false,"hex":false},"sequence":false},"vout":{"value":false,"index":false,"n":false,"spentTxid":false,"scriptPubKey":{"asm":false,"hex":false,"reqSigs":false,"type":false,"addresses":false}},"blocktime":false,"blockhash":false,"blockindex":false,"confirmations":false,"timeReceived":false},"Outputs":{"scriptPubKey":true,"txid":true,"txId":true,"value":true,"vout":true},"Propagate":{},"Status":{"blockId":true,"txid":true,"txId":true}}}}];

module.exports = abstractCBMatrix;