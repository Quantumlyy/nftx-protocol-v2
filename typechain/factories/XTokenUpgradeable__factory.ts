/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  XTokenUpgradeable,
  XTokenUpgradeableInterface,
} from "../XTokenUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "until",
        type: "uint256",
      },
    ],
    name: "Timelocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_baseToken",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "__XToken_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseToken",
    outputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_share",
        type: "uint256",
      },
    ],
    name: "burnXTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timelockLength",
        type: "uint256",
      },
    ],
    name: "mintXTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timelockLength",
        type: "uint256",
      },
    ],
    name: "timelockAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "timelockUntil",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611dd1806100206000396000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c80637efe41b1116100cd578063b068498d11610081578063c55dae6311610066578063c55dae63146102f4578063dd62ed3e14610307578063f2fde38b1461034057600080fd5b8063b068498d146102b8578063c19ea053146102cb57600080fd5b806395d89b41116100b257806395d89b411461028a578063a457c2d714610292578063a9059cbb146102a557600080fd5b80637efe41b1146102525780638da5cb5b1461026557600080fd5b806330fe73fd116101245780633950935111610109578063395093511461020e57806370a0823114610221578063715018a61461024a57600080fd5b806330fe73fd146101ea578063313ce567146101ff57600080fd5b806318160ddd1161015557806318160ddd146101b257806319e616a3146101c457806323b872dd146101d757600080fd5b806306fdde0314610171578063095ea7b31461018f575b600080fd5b610179610353565b6040516101869190611c67565b60405180910390f35b6101a261019d366004611bb8565b6103e5565b6040519015158152602001610186565b6067545b604051908152602001610186565b6101b66101d2366004611bb8565b6103fb565b6101a26101e5366004611b0c565b610528565b6101fd6101f8366004611b47565b6105f0565b005b60405160128152602001610186565b6101a261021c366004611bb8565b6106e0565b6101b661022f366004611ac0565b6001600160a01b031660009081526065602052604090205490565b6101fd610717565b6101b6610260366004611be1565b6107c8565b6033546001600160a01b03165b6040516001600160a01b039091168152602001610186565b610179610903565b6101a26102a0366004611bb8565b610912565b6101a26102b3366004611bb8565b6109c5565b6101fd6102c6366004611bb8565b6109d2565b6101b66102d9366004611ac0565b6001600160a01b031660009081526098602052604090205490565b609754610272906001600160a01b031681565b6101b6610315366004611ada565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205490565b6101fd61034e366004611ac0565b610b07565b60606068805461036290611d34565b80601f016020809104026020016040519081016040528092919081815260200182805461038e90611d34565b80156103db5780601f106103b0576101008083540402835291602001916103db565b820191906000526020600020905b8154815290600101906020018083116103be57829003601f168201915b5050505050905090565b60006103f2338484610c46565b50600192915050565b6033546000906001600160a01b0316331461045d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b600061046860675490565b6097546040516370a0823160e01b815230600482015291925060009183916001600160a01b0316906370a082319060240160206040518083038186803b1580156104b157600080fd5b505afa1580156104c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e99190611c33565b6104f39086611cd2565b6104fd9190611cb2565b90506105098585610d9f565b609754610520906001600160a01b03168683610e02565b949350505050565b6000610535848484610e82565b6001600160a01b0384166000908152606660209081526040808320338452909152902054828110156105cf5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e63650000000000000000000000000000000000000000000000006064820152608401610454565b6105e385336105de8685611cf1565b610c46565b60019150505b9392505050565b600054610100900460ff1680610609575060005460ff16155b61066c5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610454565b600054610100900460ff1615801561068e576000805461ffff19166101011790555b610696610ee2565b6106a08383610fa5565b6097805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03861617905580156106da576000805461ff00191690555b50505050565b3360008181526066602090815260408083206001600160a01b038716845290915281205490916103f29185906105de908690611c9a565b6033546001600160a01b031633146107715760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610454565b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36033805473ffffffffffffffffffffffffffffffffffffffff19169055565b6033546000906001600160a01b031633146108255760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610454565b6097546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b15801561086957600080fd5b505afa15801561087d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a19190611c33565b905060006108ae60675490565b90508015806108bb575081155b156108d5576108cb86868661106b565b84925050506105e9565b6000826108e28388611cd2565b6108ec9190611cb2565b90506108f987828761106b565b92506105e9915050565b60606069805461036290611d34565b3360009081526066602090815260408083206001600160a01b0386168452909152812054828110156109ac5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610454565b6109bb33856105de8685611cf1565b5060019392505050565b60006103f2338484610e82565b6033546001600160a01b03163314610a2c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610454565b62278d008110610a7e5760405162461bcd60e51b815260206004820152600d60248201527f546f6f206c6f6e67206c6f636b000000000000000000000000000000000000006044820152606401610454565b6000610a8a8242611c9a565b6001600160a01b038416600090815260986020526040902054909150811115610b02576001600160a01b038316600081815260986020908152604091829020849055815192835282018390527f38f63775093182d55eb9f15cb41c506fd976eadb1b4544ba0aeaed494ee70cde910160405180910390a15b505050565b6033546001600160a01b03163314610b615760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610454565b6001600160a01b038116610bdd5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610454565b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36033805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001600160a01b038316610cc15760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610454565b6001600160a01b038216610d3d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610454565b6001600160a01b0383811660008181526066602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0382166000908152609860205260409020544211610df45760405162461bcd60e51b815260206004820152600b60248201526a155cd95c881b1bd8dad95960aa1b6044820152606401610454565b610dfe828261107f565b5050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052610b02908490611205565b6001600160a01b0383166000908152609860205260409020544211610ed75760405162461bcd60e51b815260206004820152600b60248201526a155cd95c881b1bd8dad95960aa1b6044820152606401610454565b610b028383836112ea565b600054610100900460ff1680610efb575060005460ff16155b610f5e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610454565b600054610100900460ff16158015610f80576000805461ffff19166101011790555b610f8861150b565b610f906115bc565b8015610fa2576000805461ff00191690555b50565b600054610100900460ff1680610fbe575060005460ff16155b6110215760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610454565b600054610100900460ff16158015611043576000805461ffff19166101011790555b61104b61150b565b61105583836116be565b8015610b02576000805461ff0019169055505050565b61107583826109d2565b610b02838361179a565b6001600160a01b0382166110fb5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610454565b6001600160a01b0382166000908152606560205260409020548181101561118a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610454565b6111948282611cf1565b6001600160a01b038416600090815260656020526040812091909155606780548492906111c2908490611cf1565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610d92565b600061125a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166118799092919063ffffffff16565b805190915015610b0257808060200190518101906112789190611c13565b610b025760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610454565b6001600160a01b0383166113665760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610454565b6001600160a01b0382166113e25760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610454565b6001600160a01b038316600090815260656020526040902054818110156114715760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610454565b61147b8282611cf1565b6001600160a01b0380861660009081526065602052604080822093909355908516815290812080548492906114b1908490611c9a565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516114fd91815260200190565b60405180910390a350505050565b600054610100900460ff1680611524575060005460ff16155b6115875760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610454565b600054610100900460ff16158015610f90576000805461ffff19166101011790558015610fa2576000805461ff001916905550565b600054610100900460ff16806115d5575060005460ff16155b6116385760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610454565b600054610100900460ff1615801561165a576000805461ffff19166101011790555b6033805473ffffffffffffffffffffffffffffffffffffffff19163390811790915560405181906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610fa2576000805461ff001916905550565b600054610100900460ff16806116d7575060005460ff16155b61173a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610454565b600054610100900460ff1615801561175c576000805461ffff19166101011790555b825161176f906068906020860190611984565b508151611783906069906020850190611984565b508015610b02576000805461ff0019169055505050565b6001600160a01b0382166117f05760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610454565b80606760008282546118029190611c9a565b90915550506001600160a01b0382166000908152606560205260408120805483929061182f908490611c9a565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6060610520848460008585843b6118d25760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610454565b600080866001600160a01b031685876040516118ee9190611c4b565b60006040518083038185875af1925050503d806000811461192b576040519150601f19603f3d011682016040523d82523d6000602084013e611930565b606091505b509150915061194082828661194b565b979650505050505050565b6060831561195a5750816105e9565b82511561196a5782518084602001fd5b8160405162461bcd60e51b81526004016104549190611c67565b82805461199090611d34565b90600052602060002090601f0160209004810192826119b257600085556119f8565b82601f106119cb57805160ff19168380011785556119f8565b828001600101855582156119f8579182015b828111156119f85782518255916020019190600101906119dd565b50611a04929150611a08565b5090565b5b80821115611a045760008155600101611a09565b80356001600160a01b0381168114611a3457600080fd5b919050565b600082601f830112611a49578081fd5b813567ffffffffffffffff80821115611a6457611a64611d85565b604051601f8301601f19908116603f01168101908282118183101715611a8c57611a8c611d85565b81604052838152866020858801011115611aa4578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215611ad1578081fd5b6105e982611a1d565b60008060408385031215611aec578081fd5b611af583611a1d565b9150611b0360208401611a1d565b90509250929050565b600080600060608486031215611b20578081fd5b611b2984611a1d565b9250611b3760208501611a1d565b9150604084013590509250925092565b600080600060608486031215611b5b578283fd5b611b6484611a1d565b9250602084013567ffffffffffffffff80821115611b80578384fd5b611b8c87838801611a39565b93506040860135915080821115611ba1578283fd5b50611bae86828701611a39565b9150509250925092565b60008060408385031215611bca578182fd5b611bd383611a1d565b946020939093013593505050565b600080600060608486031215611bf5578283fd5b611bfe84611a1d565b95602085013595506040909401359392505050565b600060208284031215611c24578081fd5b815180151581146105e9578182fd5b600060208284031215611c44578081fd5b5051919050565b60008251611c5d818460208701611d08565b9190910192915050565b6020815260008251806020840152611c86816040850160208701611d08565b601f01601f19169190910160400192915050565b60008219821115611cad57611cad611d6f565b500190565b600082611ccd57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611cec57611cec611d6f565b500290565b600082821015611d0357611d03611d6f565b500390565b60005b83811015611d23578181015183820152602001611d0b565b838111156106da5750506000910152565b600181811c90821680611d4857607f821691505b60208210811415611d6957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122040d75194fc955c16ccd88d9d8637a1e44b3af7985d0d846c656af30fa10d873b64736f6c63430008040033";

export class XTokenUpgradeable__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<XTokenUpgradeable> {
    return super.deploy(overrides || {}) as Promise<XTokenUpgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): XTokenUpgradeable {
    return super.attach(address) as XTokenUpgradeable;
  }
  connect(signer: Signer): XTokenUpgradeable__factory {
    return super.connect(signer) as XTokenUpgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): XTokenUpgradeableInterface {
    return new utils.Interface(_abi) as XTokenUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): XTokenUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as XTokenUpgradeable;
  }
}