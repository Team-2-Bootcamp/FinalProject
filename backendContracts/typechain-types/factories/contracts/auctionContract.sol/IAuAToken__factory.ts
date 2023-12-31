/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IAuAToken,
  IAuATokenInterface,
} from "../../../contracts/auctionContract.sol/IAuAToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
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
] as const;

export class IAuAToken__factory {
  static readonly abi = _abi;
  static createInterface(): IAuATokenInterface {
    return new Interface(_abi) as IAuATokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IAuAToken {
    return new Contract(address, _abi, runner) as unknown as IAuAToken;
  }
}
