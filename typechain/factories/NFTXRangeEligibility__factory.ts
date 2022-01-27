/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NFTXRangeEligibility,
  NFTXRangeEligibilityInterface,
} from "../NFTXRangeEligibility";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rangeStart",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rangeEnd",
        type: "uint256",
      },
    ],
    name: "NFTXEligibilityInit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rangeStart",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rangeEnd",
        type: "uint256",
      },
    ],
    name: "RangeSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rangeStart",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rangeEnd",
        type: "uint256",
      },
    ],
    name: "__NFTXEligibility_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_configData",
        type: "bytes",
      },
    ],
    name: "__NFTXEligibility_init_bytes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "afterMintHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "afterRedeemHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "beforeMintHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "beforeRedeemHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "checkAllEligible",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "checkAllIneligible",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "checkEligible",
    outputs: [
      {
        internalType: "bool[]",
        name: "",
        type: "bool[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "checkIsEligible",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "finalized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "rangeEnd",
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
    name: "rangeStart",
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
    name: "targetAsset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506108c7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80636c47d59511610097578063b3f05b9711610066578063b3f05b97146101ee578063bd8affde14610157578063ca373f28146101f5578063d2a096e81461020857600080fd5b80636c47d595146101575780636cd91260146101a25780637920c127146101c257806384ca9f85146101cb57600080fd5b80633d4403ac116100d35780633d4403ac146101695780634998b7f3146101785780635c99ee011461018b5780635e2f9b521461015757600080fd5b806306fdde03146100fa578063264b1b601461014257806336eb086214610157575b600080fd5b604080518082018252600581527f52616e6765000000000000000000000000000000000000000000000000000000602082015290516101399190610801565b60405180910390f35b610155610150366004610777565b61021b565b005b610155610165366004610645565b5050565b60405160008152602001610139565b6101556101863660046106b5565b6103b0565b61019460025481565b604051908152602001610139565b6101b56101b0366004610645565b610499565b60405161013991906107bb565b61019460015481565b6101de6101d9366004610645565b610578565b6040519015158152602001610139565b60016101de565b6101de610203366004610645565b6105d4565b6101de61021636600461075f565b610626565b600054610100900460ff1680610234575060005460ff16155b6102ab5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084015b60405180910390fd5b600054610100900460ff161580156102cd576000805461ffff19166101011790555b8183111561031d5760405162461bcd60e51b815260206004820152600b60248201527f7374617274203e20656e6400000000000000000000000000000000000000000060448201526064016102a2565b6001839055600282905560408051848152602081018490527f2aa006707091dbb6a3c123c2b234325bd71d72a53ba791b7227967655a550957910160405180910390a160408051848152602081018490527f89321eb999f10a080658dd5e8e1ad2ad210be9e3d965c97d0fff3380159664fd910160405180910390a180156103ab576000805461ff00191690555b505050565b600054610100900460ff16806103c9575060005460ff16155b61043b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016102a2565b600054610100900460ff1615801561045d576000805461ffff19166101011790555b600080838060200190518101906104749190610798565b91509150610482828261021b565b50508015610165576000805461ff00191690555050565b60608160008167ffffffffffffffff8111156104c557634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156104ee578160200160208202803683370190505b50905060005b8281101561056d5761052b86868381811061051f57634e487b7160e01b600052603260045260246000fd5b9050602002013561062d565b82828151811061054b57634e487b7160e01b600052603260045260246000fd5b911515602092830291909101909101528061056581610854565b9150506104f4565b509150505b92915050565b600081815b818110156105c9576105a885858381811061051f57634e487b7160e01b600052603260045260246000fd5b6105b757600092505050610572565b806105c181610854565b91505061057d565b506001949350505050565b600081815b818110156105c95761060485858381811061051f57634e487b7160e01b600052603260045260246000fd5b1561061457600092505050610572565b8061061e81610854565b9150506105d9565b6000610572825b60006001548210158015610572575050600254101590565b60008060208385031215610657578182fd5b823567ffffffffffffffff8082111561066e578384fd5b818501915085601f830112610681578384fd5b81358181111561068f578485fd5b8660208260051b85010111156106a3578485fd5b60209290920196919550909350505050565b6000602082840312156106c6578081fd5b813567ffffffffffffffff808211156106dd578283fd5b818401915084601f8301126106f0578283fd5b8135818111156107025761070261087b565b604051601f8201601f19908116603f0116810190838211818310171561072a5761072a61087b565b81604052828152876020848701011115610742578586fd5b826020860160208301379182016020019490945295945050505050565b600060208284031215610770578081fd5b5035919050565b60008060408385031215610789578182fd5b50508035926020909101359150565b600080604083850312156107aa578182fd5b505080516020909101519092909150565b6020808252825182820181905260009190848201906040850190845b818110156107f55783511515835292840192918401916001016107d7565b50909695505050505050565b6000602080835283518082850152825b8181101561082d57858101830151858201604001528201610811565b8181111561083e5783604083870101525b50601f01601f1916929092016040019392505050565b600060001982141561087457634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220172bebd9f68b86369f83885a5267dc163f08892352fe3e113f69862d0215922b64736f6c63430008040033";

export class NFTXRangeEligibility__factory extends ContractFactory {
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
  ): Promise<NFTXRangeEligibility> {
    return super.deploy(overrides || {}) as Promise<NFTXRangeEligibility>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NFTXRangeEligibility {
    return super.attach(address) as NFTXRangeEligibility;
  }
  connect(signer: Signer): NFTXRangeEligibility__factory {
    return super.connect(signer) as NFTXRangeEligibility__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTXRangeEligibilityInterface {
    return new utils.Interface(_abi) as NFTXRangeEligibilityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTXRangeEligibility {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NFTXRangeEligibility;
  }
}