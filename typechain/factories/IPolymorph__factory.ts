/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPolymorph, IPolymorphInterface } from "../IPolymorph";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "geneOf",
    outputs: [
      {
        internalType: "uint256",
        name: "gene",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IPolymorph__factory {
  static readonly abi = _abi;
  static createInterface(): IPolymorphInterface {
    return new utils.Interface(_abi) as IPolymorphInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPolymorph {
    return new Contract(address, _abi, signerOrProvider) as IPolymorph;
  }
}