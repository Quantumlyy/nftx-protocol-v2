/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface CryptoPunksMarketInterface extends ethers.utils.Interface {
  functions: {
    "acceptBidForPunk(uint256,uint256)": FunctionFragment;
    "allInitialOwnersAssigned()": FunctionFragment;
    "allPunksAssigned()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "buyPunk(uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "enterBidForPunk(uint256)": FunctionFragment;
    "getPunk(uint256)": FunctionFragment;
    "imageHash()": FunctionFragment;
    "name()": FunctionFragment;
    "nextPunkIndexToAssign()": FunctionFragment;
    "offerPunkForSale(uint256,uint256)": FunctionFragment;
    "offerPunkForSaleToAddress(uint256,uint256,address)": FunctionFragment;
    "pendingWithdrawals(address)": FunctionFragment;
    "punkBids(uint256)": FunctionFragment;
    "punkIndexToAddress(uint256)": FunctionFragment;
    "punkNoLongerForSale(uint256)": FunctionFragment;
    "punksOfferedForSale(uint256)": FunctionFragment;
    "punksRemainingToAssign()": FunctionFragment;
    "setInitialOwner(address,uint256)": FunctionFragment;
    "setInitialOwners(address[],uint256[])": FunctionFragment;
    "standard()": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferPunk(address,uint256)": FunctionFragment;
    "withdraw()": FunctionFragment;
    "withdrawBidForPunk(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptBidForPunk",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allInitialOwnersAssigned",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allPunksAssigned",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "buyPunk",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "enterBidForPunk",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPunk",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "imageHash", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nextPunkIndexToAssign",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "offerPunkForSale",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "offerPunkForSaleToAddress",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingWithdrawals",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "punkBids",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "punkIndexToAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "punkNoLongerForSale",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "punksOfferedForSale",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "punksRemainingToAssign",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setInitialOwner",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setInitialOwners",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "standard", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferPunk",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawBidForPunk",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptBidForPunk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allInitialOwnersAssigned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allPunksAssigned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyPunk", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "enterBidForPunk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPunk", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "imageHash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextPunkIndexToAssign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "offerPunkForSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "offerPunkForSaleToAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingWithdrawals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "punkBids", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "punkIndexToAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "punkNoLongerForSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "punksOfferedForSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "punksRemainingToAssign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInitialOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInitialOwners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "standard", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferPunk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawBidForPunk",
    data: BytesLike
  ): Result;

  events: {
    "Assign(address,uint256)": EventFragment;
    "PunkBidEntered(uint256,uint256,address)": EventFragment;
    "PunkBidWithdrawn(uint256,uint256,address)": EventFragment;
    "PunkBought(uint256,uint256,address,address)": EventFragment;
    "PunkNoLongerForSale(uint256)": EventFragment;
    "PunkOffered(uint256,uint256,address)": EventFragment;
    "PunkTransfer(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Assign"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PunkBidEntered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PunkBidWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PunkBought"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PunkNoLongerForSale"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PunkOffered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PunkTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type AssignEvent = TypedEvent<
  [string, BigNumber] & { to: string; punkIndex: BigNumber }
>;

export type PunkBidEnteredEvent = TypedEvent<
  [BigNumber, BigNumber, string] & {
    punkIndex: BigNumber;
    value: BigNumber;
    fromAddress: string;
  }
>;

export type PunkBidWithdrawnEvent = TypedEvent<
  [BigNumber, BigNumber, string] & {
    punkIndex: BigNumber;
    value: BigNumber;
    fromAddress: string;
  }
>;

export type PunkBoughtEvent = TypedEvent<
  [BigNumber, BigNumber, string, string] & {
    punkIndex: BigNumber;
    value: BigNumber;
    fromAddress: string;
    toAddress: string;
  }
>;

export type PunkNoLongerForSaleEvent = TypedEvent<
  [BigNumber] & { punkIndex: BigNumber }
>;

export type PunkOfferedEvent = TypedEvent<
  [BigNumber, BigNumber, string] & {
    punkIndex: BigNumber;
    minValue: BigNumber;
    toAddress: string;
  }
>;

export type PunkTransferEvent = TypedEvent<
  [string, string, BigNumber] & {
    from: string;
    to: string;
    punkIndex: BigNumber;
  }
>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber] & { from: string; to: string; value: BigNumber }
>;

export class CryptoPunksMarket extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CryptoPunksMarketInterface;

  functions: {
    acceptBidForPunk(
      punkIndex: BigNumberish,
      minPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allInitialOwnersAssigned(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allPunksAssigned(overrides?: CallOverrides): Promise<[boolean]>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    buyPunk(
      punkIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    enterBidForPunk(
      punkIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPunk(
      punkIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    imageHash(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nextPunkIndexToAssign(overrides?: CallOverrides): Promise<[BigNumber]>;

    offerPunkForSale(
      punkIndex: BigNumberish,
      minSalePriceInWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    offerPunkForSaleToAddress(
      punkIndex: BigNumberish,
      minSalePriceInWei: BigNumberish,
      toAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pendingWithdrawals(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    punkBids(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, string, BigNumber] & {
        hasBid: boolean;
        punkIndex: BigNumber;
        bidder: string;
        value: BigNumber;
      }
    >;

    punkIndexToAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    punkNoLongerForSale(
      punkIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    punksOfferedForSale(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, string, BigNumber, string] & {
        isForSale: boolean;
        punkIndex: BigNumber;
        seller: string;
        minValue: BigNumber;
        onlySellTo: string;
      }
    >;

    punksRemainingToAssign(overrides?: CallOverrides): Promise<[BigNumber]>;

    setInitialOwner(
      to: string,
      punkIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setInitialOwners(
      addresses: string[],
      indices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    standard(overrides?: CallOverrides): Promise<[string]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferPunk(
      to: string,
      punkIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawBidForPunk(
      punkIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptBidForPunk(
    punkIndex: BigNumberish,
    minPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allInitialOwnersAssigned(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allPunksAssigned(overrides?: CallOverrides): Promise<boolean>;

  balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  buyPunk(
    punkIndex: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  enterBidForPunk(
    punkIndex: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPunk(
    punkIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  imageHash(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  nextPunkIndexToAssign(overrides?: CallOverrides): Promise<BigNumber>;

  offerPunkForSale(
    punkIndex: BigNumberish,
    minSalePriceInWei: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  offerPunkForSaleToAddress(
    punkIndex: BigNumberish,
    minSalePriceInWei: BigNumberish,
    toAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pendingWithdrawals(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  punkBids(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, string, BigNumber] & {
      hasBid: boolean;
      punkIndex: BigNumber;
      bidder: string;
      value: BigNumber;
    }
  >;

  punkIndexToAddress(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  punkNoLongerForSale(
    punkIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  punksOfferedForSale(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, string, BigNumber, string] & {
      isForSale: boolean;
      punkIndex: BigNumber;
      seller: string;
      minValue: BigNumber;
      onlySellTo: string;
    }
  >;

  punksRemainingToAssign(overrides?: CallOverrides): Promise<BigNumber>;

  setInitialOwner(
    to: string,
    punkIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setInitialOwners(
    addresses: string[],
    indices: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  standard(overrides?: CallOverrides): Promise<string>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferPunk(
    to: string,
    punkIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawBidForPunk(
    punkIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptBidForPunk(
      punkIndex: BigNumberish,
      minPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    allInitialOwnersAssigned(overrides?: CallOverrides): Promise<void>;

    allPunksAssigned(overrides?: CallOverrides): Promise<boolean>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    buyPunk(punkIndex: BigNumberish, overrides?: CallOverrides): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    enterBidForPunk(
      punkIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getPunk(punkIndex: BigNumberish, overrides?: CallOverrides): Promise<void>;

    imageHash(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    nextPunkIndexToAssign(overrides?: CallOverrides): Promise<BigNumber>;

    offerPunkForSale(
      punkIndex: BigNumberish,
      minSalePriceInWei: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    offerPunkForSaleToAddress(
      punkIndex: BigNumberish,
      minSalePriceInWei: BigNumberish,
      toAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    pendingWithdrawals(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    punkBids(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, string, BigNumber] & {
        hasBid: boolean;
        punkIndex: BigNumber;
        bidder: string;
        value: BigNumber;
      }
    >;

    punkIndexToAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    punkNoLongerForSale(
      punkIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    punksOfferedForSale(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, string, BigNumber, string] & {
        isForSale: boolean;
        punkIndex: BigNumber;
        seller: string;
        minValue: BigNumber;
        onlySellTo: string;
      }
    >;

    punksRemainingToAssign(overrides?: CallOverrides): Promise<BigNumber>;

    setInitialOwner(
      to: string,
      punkIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setInitialOwners(
      addresses: string[],
      indices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    standard(overrides?: CallOverrides): Promise<string>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferPunk(
      to: string,
      punkIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(overrides?: CallOverrides): Promise<void>;

    withdrawBidForPunk(
      punkIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Assign(address,uint256)"(
      to?: string | null,
      punkIndex?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { to: string; punkIndex: BigNumber }
    >;

    Assign(
      to?: string | null,
      punkIndex?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { to: string; punkIndex: BigNumber }
    >;

    "PunkBidEntered(uint256,uint256,address)"(
      punkIndex?: BigNumberish | null,
      value?: null,
      fromAddress?: string | null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string],
      { punkIndex: BigNumber; value: BigNumber; fromAddress: string }
    >;

    PunkBidEntered(
      punkIndex?: BigNumberish | null,
      value?: null,
      fromAddress?: string | null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string],
      { punkIndex: BigNumber; value: BigNumber; fromAddress: string }
    >;

    "PunkBidWithdrawn(uint256,uint256,address)"(
      punkIndex?: BigNumberish | null,
      value?: null,
      fromAddress?: string | null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string],
      { punkIndex: BigNumber; value: BigNumber; fromAddress: string }
    >;

    PunkBidWithdrawn(
      punkIndex?: BigNumberish | null,
      value?: null,
      fromAddress?: string | null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string],
      { punkIndex: BigNumber; value: BigNumber; fromAddress: string }
    >;

    "PunkBought(uint256,uint256,address,address)"(
      punkIndex?: BigNumberish | null,
      value?: null,
      fromAddress?: string | null,
      toAddress?: string | null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, string],
      {
        punkIndex: BigNumber;
        value: BigNumber;
        fromAddress: string;
        toAddress: string;
      }
    >;

    PunkBought(
      punkIndex?: BigNumberish | null,
      value?: null,
      fromAddress?: string | null,
      toAddress?: string | null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, string],
      {
        punkIndex: BigNumber;
        value: BigNumber;
        fromAddress: string;
        toAddress: string;
      }
    >;

    "PunkNoLongerForSale(uint256)"(
      punkIndex?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { punkIndex: BigNumber }>;

    PunkNoLongerForSale(
      punkIndex?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { punkIndex: BigNumber }>;

    "PunkOffered(uint256,uint256,address)"(
      punkIndex?: BigNumberish | null,
      minValue?: null,
      toAddress?: string | null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string],
      { punkIndex: BigNumber; minValue: BigNumber; toAddress: string }
    >;

    PunkOffered(
      punkIndex?: BigNumberish | null,
      minValue?: null,
      toAddress?: string | null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string],
      { punkIndex: BigNumber; minValue: BigNumber; toAddress: string }
    >;

    "PunkTransfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      punkIndex?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; punkIndex: BigNumber }
    >;

    PunkTransfer(
      from?: string | null,
      to?: string | null,
      punkIndex?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; punkIndex: BigNumber }
    >;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;

    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;
  };

  estimateGas: {
    acceptBidForPunk(
      punkIndex: BigNumberish,
      minPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allInitialOwnersAssigned(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allPunksAssigned(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    buyPunk(
      punkIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    enterBidForPunk(
      punkIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPunk(
      punkIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    imageHash(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nextPunkIndexToAssign(overrides?: CallOverrides): Promise<BigNumber>;

    offerPunkForSale(
      punkIndex: BigNumberish,
      minSalePriceInWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    offerPunkForSaleToAddress(
      punkIndex: BigNumberish,
      minSalePriceInWei: BigNumberish,
      toAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pendingWithdrawals(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    punkBids(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    punkIndexToAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    punkNoLongerForSale(
      punkIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    punksOfferedForSale(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    punksRemainingToAssign(overrides?: CallOverrides): Promise<BigNumber>;

    setInitialOwner(
      to: string,
      punkIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setInitialOwners(
      addresses: string[],
      indices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    standard(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferPunk(
      to: string,
      punkIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawBidForPunk(
      punkIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptBidForPunk(
      punkIndex: BigNumberish,
      minPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allInitialOwnersAssigned(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allPunksAssigned(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buyPunk(
      punkIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    enterBidForPunk(
      punkIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPunk(
      punkIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    imageHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextPunkIndexToAssign(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    offerPunkForSale(
      punkIndex: BigNumberish,
      minSalePriceInWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    offerPunkForSaleToAddress(
      punkIndex: BigNumberish,
      minSalePriceInWei: BigNumberish,
      toAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pendingWithdrawals(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    punkBids(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    punkIndexToAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    punkNoLongerForSale(
      punkIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    punksOfferedForSale(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    punksRemainingToAssign(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setInitialOwner(
      to: string,
      punkIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setInitialOwners(
      addresses: string[],
      indices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    standard(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferPunk(
      to: string,
      punkIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawBidForPunk(
      punkIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}