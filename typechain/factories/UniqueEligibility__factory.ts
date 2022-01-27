/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniqueEligibility,
  UniqueEligibilityInterface,
} from "../UniqueEligibility";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isEligible",
        type: "bool",
      },
    ],
    name: "UniqueEligibilitiesSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "isUniqueEligible",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061014f806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80633942cf3614610030575b600080fd5b61004361003e3660046100aa565b610057565b604051901515815260200160405180910390f35b600080610066610100846100c2565b600081815260208190526040902054909150610082818561008a565b949350505050565b600080610099610100846100d6565b9390931c6001908116149392505050565b6000602082840312156100bb578081fd5b5035919050565b6000826100d1576100d16100ea565b500490565b6000826100e5576100e56100ea565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea264697066735822122088735f21eba36149c6f19665e1a0be949cbd45ffd2cdbd05999bbe2f1baf8cdf64736f6c63430008040033";

export class UniqueEligibility__factory extends ContractFactory {
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
  ): Promise<UniqueEligibility> {
    return super.deploy(overrides || {}) as Promise<UniqueEligibility>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UniqueEligibility {
    return super.attach(address) as UniqueEligibility;
  }
  connect(signer: Signer): UniqueEligibility__factory {
    return super.connect(signer) as UniqueEligibility__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniqueEligibilityInterface {
    return new utils.Interface(_abi) as UniqueEligibilityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniqueEligibility {
    return new Contract(address, _abi, signerOrProvider) as UniqueEligibility;
  }
}