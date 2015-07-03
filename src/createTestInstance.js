var createTestInstance = function () {
  
  var Addresses = {
    Summary: {
      address: false,
      balance: false,
      totalReceived: false,
      totalSent: false,
      txCount: false
    },

    Transactions: {
      blockHeight: false,
      blockId: false,
      hex: false,
      txHex: false,
      txid: false,
      txId: false
    },

    Unspents: {
      address: false,
      confirmations: false,
      txid: false,
      txId: false,
      value: false,
      amount: false,
      vout: false,
      scriptPubKey: false
    }
  };

  var Blocks = {
    Get: {
      blockHex: false,
      blockId: false
    },

    Latest: {
      blockHex: false,
      blockId: false
    },

    Propagate: {},

    Transactions: {
      blockId: false,
      txid: false,
      txId: false
    }
  };

  var Transactions = {
    Get: {
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
      blocktime: false,
      blockhash: false,
      blockindex: false,
      confirmations: false,
      timeReceived: false
    },

    Latest: {
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
      blocktime: false,
      blockhash: false,
      blockindex: false,
      confirmations: false,
      timeReceived: false
    },

    Outputs: {
      scriptPubKey: false,
      txid: false,
      txId: false,
      value: false,
      vout: false
    },

    Propagate: {

    },

    Status: {
      blockId: false,
      txid: false,
      txId: false
    }
  };

  return ({
    Addresses: Addresses,
    Blocks: Blocks,
    Transactions: Transactions
  });
}

module.exports = createTestInstance;
