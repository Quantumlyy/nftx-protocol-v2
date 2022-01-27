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

interface NFTXV1BuyoutInterface extends ethers.utils.Interface {
  functions: {
    "__NFTXV1Buyout_init()": FunctionFragment;
    "addBuyout(address)": FunctionFragment;
    "claimETH(address)": FunctionFragment;
    "clearBuyout(address)": FunctionFragment;
    "emergencyWithdraw()": FunctionFragment;
    "ethAvailiable(address)": FunctionFragment;
    "isGuardian(address)": FunctionFragment;
    "isPaused(uint256)": FunctionFragment;
    "onlyOwnerIfPaused(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "pause(uint256)": FunctionFragment;
    "removeBuyout(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setIsGuardian(address,bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "__NFTXV1Buyout_init",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "addBuyout", values: [string]): string;
  encodeFunctionData(functionFragment: "claimETH", values: [string]): string;
  encodeFunctionData(functionFragment: "clearBuyout", values: [string]): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ethAvailiable",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isGuardian", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isPaused",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onlyOwnerIfPaused",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "removeBuyout",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setIsGuardian",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unpause",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "__NFTXV1Buyout_init",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addBuyout", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "clearBuyout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ethAvailiable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isGuardian", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onlyOwnerIfPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeBuyout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIsGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;

  events: {
    "BuyoutComplete(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SetIsGuardian(address,bool)": EventFragment;
    "SetPaused(uint256,bool)": EventFragment;
    "TokenBuyout(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BuyoutComplete"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetIsGuardian"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetPaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenBuyout"): EventFragment;
}

export type BuyoutCompleteEvent = TypedEvent<
  [string] & { tokenAddress: string }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type SetIsGuardianEvent = TypedEvent<
  [string, boolean] & { addr: string; isGuardian: boolean }
>;

export type SetPausedEvent = TypedEvent<
  [BigNumber, boolean] & { lockId: BigNumber; paused: boolean }
>;

export type TokenBuyoutEvent = TypedEvent<
  [string, BigNumber] & { tokenAddress: string; totalEth: BigNumber }
>;

export class NFTXV1Buyout extends BaseContract {
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

  interface: NFTXV1BuyoutInterface;

  functions: {
    __NFTXV1Buyout_init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addBuyout(
      v1TokenAddr: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimETH(
      v1TokenAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    clearBuyout(
      v1TokenAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ethAvailiable(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isGuardian(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    isPaused(arg0: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    onlyOwnerIfPaused(
      lockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeBuyout(
      v1TokenAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setIsGuardian(
      addr: string,
      _isGuardian: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  __NFTXV1Buyout_init(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addBuyout(
    v1TokenAddr: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimETH(
    v1TokenAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  clearBuyout(
    v1TokenAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ethAvailiable(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  isGuardian(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  isPaused(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  onlyOwnerIfPaused(
    lockId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    lockId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeBuyout(
    v1TokenAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setIsGuardian(
    addr: string,
    _isGuardian: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    lockId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    __NFTXV1Buyout_init(overrides?: CallOverrides): Promise<void>;

    addBuyout(v1TokenAddr: string, overrides?: CallOverrides): Promise<void>;

    claimETH(v1TokenAddr: string, overrides?: CallOverrides): Promise<void>;

    clearBuyout(v1TokenAddr: string, overrides?: CallOverrides): Promise<void>;

    emergencyWithdraw(overrides?: CallOverrides): Promise<void>;

    ethAvailiable(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    isGuardian(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    isPaused(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    onlyOwnerIfPaused(
      lockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(lockId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    removeBuyout(v1TokenAddr: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setIsGuardian(
      addr: string,
      _isGuardian: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(lockId: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "BuyoutComplete(address)"(
      tokenAddress?: null
    ): TypedEventFilter<[string], { tokenAddress: string }>;

    BuyoutComplete(
      tokenAddress?: null
    ): TypedEventFilter<[string], { tokenAddress: string }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "SetIsGuardian(address,bool)"(
      addr?: null,
      isGuardian?: null
    ): TypedEventFilter<
      [string, boolean],
      { addr: string; isGuardian: boolean }
    >;

    SetIsGuardian(
      addr?: null,
      isGuardian?: null
    ): TypedEventFilter<
      [string, boolean],
      { addr: string; isGuardian: boolean }
    >;

    "SetPaused(uint256,bool)"(
      lockId?: null,
      paused?: null
    ): TypedEventFilter<
      [BigNumber, boolean],
      { lockId: BigNumber; paused: boolean }
    >;

    SetPaused(
      lockId?: null,
      paused?: null
    ): TypedEventFilter<
      [BigNumber, boolean],
      { lockId: BigNumber; paused: boolean }
    >;

    "TokenBuyout(address,uint256)"(
      tokenAddress?: null,
      totalEth?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { tokenAddress: string; totalEth: BigNumber }
    >;

    TokenBuyout(
      tokenAddress?: null,
      totalEth?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { tokenAddress: string; totalEth: BigNumber }
    >;
  };

  estimateGas: {
    __NFTXV1Buyout_init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addBuyout(
      v1TokenAddr: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimETH(
      v1TokenAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    clearBuyout(
      v1TokenAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ethAvailiable(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    isGuardian(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    isPaused(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    onlyOwnerIfPaused(
      lockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeBuyout(
      v1TokenAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setIsGuardian(
      addr: string,
      _isGuardian: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    __NFTXV1Buyout_init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addBuyout(
      v1TokenAddr: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimETH(
      v1TokenAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    clearBuyout(
      v1TokenAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ethAvailiable(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isGuardian(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPaused(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onlyOwnerIfPaused(
      lockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeBuyout(
      v1TokenAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setIsGuardian(
      addr: string,
      _isGuardian: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}