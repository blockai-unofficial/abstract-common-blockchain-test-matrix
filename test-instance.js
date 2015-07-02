var createTestInstance = function() {
  var Address = {
    address: false,
    balance: false,
    totalReceived: false,
    totalSent: false,
    txCount: false
  };

  var Unspent = {
    txId: false,
    txid: false,
    vout: false,
    address: false,
    scriptPubKey: false,
    amount: false,
    value: false,
    confirmations: false
  };

  var Transaction= {
    hex: false,
    txHex: false,
    txid: false,
    txId: false,
    version: false,
    locktime: false,
    fee: false,
    vin: {
      txid: false,
      txId: false,
      vout: false,
      scriptSig: {
          asm: false,
          hex: false
      },
      sequence: false
    },
    vout: {
      value: false,
      index: false,
      n: false,
      spentTxid: false,
      scriptPubKey: {
        asm: false,
        hex: false,
        reqSigs: false,
        type: false,
        addresses: false
      }
    },
    confirmations: false,
    blocktime: false,
    blockhash: false,
    blockindex: false,
    timeReceived: false
  };

  var Block = {
    blockHex: false,
    blockId: false
  };


  return({
    address: Address,
    block: Block,
    transaction: Transaction,
    unspent: Unspent
  });
}

module.exports = createTestInstance;
