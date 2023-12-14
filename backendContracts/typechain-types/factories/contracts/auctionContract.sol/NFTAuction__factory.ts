/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  NFTAuction,
  NFTAuctionInterface,
} from "../../../contracts/auctionContract.sol/NFTAuction";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_paymentTokenAddress",
        type: "address",
      },
      {
        internalType: "contract IAuANFT",
        name: "_NftContractAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "winningBid",
        type: "uint256",
      },
    ],
    name: "AuctionEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bidAmount",
        type: "uint256",
      },
    ],
    name: "BidPlaced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyTokenWithdrawal",
    type: "event",
  },
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
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdrawal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newListingFee",
        type: "uint256",
      },
    ],
    name: "ListingFeeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "listingFee",
        type: "uint256",
      },
    ],
    name: "NFTListed",
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
    inputs: [],
    name: "NftContractAddress",
    outputs: [
      {
        internalType: "contract IAuANFT",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "auctions",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "contract IAuANFT",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startingPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "highestBidder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "highestBid",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "ended",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "emergencyWithdrawERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyWithdrawETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "endAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getListingFee",
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
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getNFTMetadata",
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
        internalType: "uint256",
        name: "_startingPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "listNFTForAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintNFT",
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
    name: "paymentTokenAddress",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bidAmount",
        type: "uint256",
      },
    ],
    name: "placeBid",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_listingFee",
        type: "uint256",
      },
    ],
    name: "setListingFee",
    outputs: [],
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620025d6380380620025d683398181016040528101906200003791906200025c565b620000576200004b620000e160201b60201c565b620000e960201b60201c565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620002a3565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001df82620001b2565b9050919050565b620001f181620001d2565b8114620001fd57600080fd5b50565b6000815190506200021181620001e6565b92915050565b60006200022482620001d2565b9050919050565b620002368162000217565b81146200024257600080fd5b50565b60008151905062000256816200022b565b92915050565b60008060408385031215620002765762000275620001ad565b5b6000620002868582860162000200565b9250506020620002998582860162000245565b9150509250929050565b61232380620002b36000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063715018a611610097578063afb18fe711610066578063afb18fe714610240578063b8fe6abe1461025e578063b9a2de3a1461027c578063f2fde38b14610298576100f5565b8063715018a6146101f057806384536017146101fa5780638da5cb5b146102045780639f91467b14610222576100f5565b806344f9fb27116100d357806344f9fb2714610150578063571a26a01461016c57806357c90de5146101a45780636be9a6f1146101c0576100f5565b8063131dbd09146100fa57806314f710fe1461011657806340c442de14610134575b600080fd5b610114600480360381019061010f919061169d565b6102b4565b005b61011e6102fd565b60405161012b91906116d9565b60405180910390f35b61014e60048036038101906101499190611752565b6103ad565b005b61016a6004803603810190610165919061177f565b610567565b005b6101866004803603810190610181919061169d565b610b96565b60405161019b9998979695949392919061185b565b60405180910390f35b6101be60048036038101906101b991906118e8565b610c51565b005b6101da60048036038101906101d5919061169d565b610f65565b6040516101e791906119b8565b60405180910390f35b6101f861111f565b005b610202611133565b005b61020c6111e0565b60405161021991906119da565b60405180910390f35b61022a611209565b60405161023791906119f5565b60405180910390f35b61024861122f565b60405161025591906119da565b60405180910390f35b610266611255565b60405161027391906116d9565b60405180910390f35b6102966004803603810190610291919061169d565b61125f565b005b6102b260048036038101906102ad9190611752565b611486565b005b6102bc611509565b806004819055507f5fb4654f1efe30c6141eaa6855ffcb27e0b361d899b05e21b1a4d0b3e71e14db816040516102f291906116d9565b60405180910390a150565b6000803390506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636a627842836040518263ffffffff1660e01b815260040161036091906119da565b6020604051808303816000875af115801561037f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a39190611a25565b9050809250505090565b6103b5611509565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103f091906119da565b602060405180830381865afa15801561040d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104319190611a25565b90508173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6104576111e0565b836040518363ffffffff1660e01b8152600401610475929190611a52565b6020604051808303816000875af1158015610494573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b89190611aa7565b6104f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ee90611b20565b60405180910390fd5b6104ff6111e0565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fa4e7b83d59f83358c69c32a951cf5f617e749b38fdb1e2ff13524b83ffd42c998360405161055b91906116d9565b60405180910390a35050565b60006105716102fd565b9050600454600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016105d191906119da565b602060405180830381865afa1580156105ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106129190611a25565b11610652576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064990611bb2565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e836040518263ffffffff1660e01b81526004016106c491906116d9565b602060405180830381865afa1580156106e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107059190611be7565b73ffffffffffffffffffffffffffffffffffffffff161461075b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075290611c60565b60405180910390fd5b6003600082815260200190815260200160002060080160009054906101000a900460ff16156107bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b690611cf2565b60405180910390fd5b428311610801576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f890611d84565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33306004546040518463ffffffff1660e01b815260040161086293929190611da4565b6020604051808303816000875af1158015610881573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a59190611aa7565b506040518061012001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200185815260200184426109249190611e0a565b81526020018385426109369190611e0a565b6109409190611e0a565b8152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600015158152506003600083815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e082015181600701556101008201518160080160006101000a81548160ff021916908315150217905550905050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401610b0d93929190611da4565b600060405180830381600087803b158015610b2757600080fd5b505af1158015610b3b573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff16817f5f9c03de076f5063cd3ebcfe8ef7aa8af378e4b35a83c77ba9777e97083879a2600454604051610b8891906116d9565b60405180910390a350505050565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154908060040154908060050154908060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060070154908060080160009054906101000a900460ff16905089565b60006003600084815260200190815260200160002090508060080160009054906101000a900460ff1615610cba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb190611e8a565b60405180910390fd5b80600701548211610d00576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf790611f1c565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610d5f93929190611da4565b6020604051808303816000875af1158015610d7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da29190611aa7565b50600073ffffffffffffffffffffffffffffffffffffffff168160060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610ec557600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8260060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683600701546040518363ffffffff1660e01b8152600401610e80929190611a52565b6020604051808303816000875af1158015610e9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec39190611aa7565b505b338160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508181600701819055503373ffffffffffffffffffffffffffffffffffffffff16837f0e54eff26401bf69b81b26f60bd85ef47f5d85275c1d268d84f68d6897431c4784604051610f5891906116d9565b60405180910390a3505050565b6060600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e846040518263ffffffff1660e01b8152600401610fda91906116d9565b602060405180830381865afa158015610ff7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101b9190611be7565b73ffffffffffffffffffffffffffffffffffffffff1603611071576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161106890611f88565b60405180910390fd5b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c87b56dd846040518263ffffffff1660e01b81526004016110ce91906116d9565b600060405180830381865afa1580156110eb573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061111491906120ce565b905080915050919050565b611127611509565b6111316000611587565b565b61113b611509565b6111436111e0565b73ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015611188573d6000803e3d6000fd5b506111916111e0565b73ffffffffffffffffffffffffffffffffffffffff167f23d6711a1d031134a36921253c75aa59e967d38e369ac625992824315e204f20476040516111d691906116d9565b60405180910390a2565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600454905090565b60006003600083815260200190815260200160002090508060080160009054906101000a900460ff16156112c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112bf90612163565b60405180910390fd5b806005015442101561130f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611306906121cf565b60405180910390fd5b60018160080160006101000a81548160ff0219169083151502179055508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168360060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684600201546040518463ffffffff1660e01b81526004016113d993929190611da4565b600060405180830381600087803b1580156113f357600080fd5b505af1158015611407573d6000803e3d6000fd5b505050508060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16827fd2aa34a4fdbbc6dff6a3e56f46e0f3ae2a31d7785ff3487aa5c95c642acea501836007015460405161147a91906116d9565b60405180910390a35050565b61148e611509565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036114fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114f490612261565b60405180910390fd5b61150681611587565b50565b61151161164b565b73ffffffffffffffffffffffffffffffffffffffff1661152f6111e0565b73ffffffffffffffffffffffffffffffffffffffff1614611585576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157c906122cd565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61167a81611667565b811461168557600080fd5b50565b60008135905061169781611671565b92915050565b6000602082840312156116b3576116b261165d565b5b60006116c184828501611688565b91505092915050565b6116d381611667565b82525050565b60006020820190506116ee60008301846116ca565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061171f826116f4565b9050919050565b61172f81611714565b811461173a57600080fd5b50565b60008135905061174c81611726565b92915050565b6000602082840312156117685761176761165d565b5b60006117768482850161173d565b91505092915050565b6000806000606084860312156117985761179761165d565b5b60006117a686828701611688565b93505060206117b786828701611688565b92505060406117c886828701611688565b9150509250925092565b6117db81611714565b82525050565b6000819050919050565b60006118066118016117fc846116f4565b6117e1565b6116f4565b9050919050565b6000611818826117eb565b9050919050565b600061182a8261180d565b9050919050565b61183a8161181f565b82525050565b60008115159050919050565b61185581611840565b82525050565b600061012082019050611871600083018c6117d2565b61187e602083018b611831565b61188b604083018a6116ca565b61189860608301896116ca565b6118a560808301886116ca565b6118b260a08301876116ca565b6118bf60c08301866117d2565b6118cc60e08301856116ca565b6118da61010083018461184c565b9a9950505050505050505050565b600080604083850312156118ff576118fe61165d565b5b600061190d85828601611688565b925050602061191e85828601611688565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611962578082015181840152602081019050611947565b60008484015250505050565b6000601f19601f8301169050919050565b600061198a82611928565b6119948185611933565b93506119a4818560208601611944565b6119ad8161196e565b840191505092915050565b600060208201905081810360008301526119d2818461197f565b905092915050565b60006020820190506119ef60008301846117d2565b92915050565b6000602082019050611a0a6000830184611831565b92915050565b600081519050611a1f81611671565b92915050565b600060208284031215611a3b57611a3a61165d565b5b6000611a4984828501611a10565b91505092915050565b6000604082019050611a6760008301856117d2565b611a7460208301846116ca565b9392505050565b611a8481611840565b8114611a8f57600080fd5b50565b600081519050611aa181611a7b565b92915050565b600060208284031215611abd57611abc61165d565b5b6000611acb84828501611a92565b91505092915050565b7f546f6b656e207472616e73666572206661696c65640000000000000000000000600082015250565b6000611b0a601583611933565b9150611b1582611ad4565b602082019050919050565b60006020820190508181036000830152611b3981611afd565b9050919050565b7f596f7520646f6e2774206861766520656e6f7567682041754120746f20636f7660008201527f657220746865206c697374696e67204665650000000000000000000000000000602082015250565b6000611b9c603283611933565b9150611ba782611b40565b604082019050919050565b60006020820190508181036000830152611bcb81611b8f565b9050919050565b600081519050611be181611726565b92915050565b600060208284031215611bfd57611bfc61165d565b5b6000611c0b84828501611bd2565b91505092915050565b7f546865204e465420646f65736e27742062656c6f6e6720746f20796f75000000600082015250565b6000611c4a601d83611933565b9150611c5582611c14565b602082019050919050565b60006020820190508181036000830152611c7981611c3d565b9050919050565b7f4e465420697320616c726561647920696e20616e20616374697665206175637460008201527f696f6e0000000000000000000000000000000000000000000000000000000000602082015250565b6000611cdc602383611933565b9150611ce782611c80565b604082019050919050565b60006020820190508181036000830152611d0b81611ccf565b9050919050565b7f546865207374617274696e672074696d652073686f756c6420626520696e207460008201527f6865206675747572650000000000000000000000000000000000000000000000602082015250565b6000611d6e602983611933565b9150611d7982611d12565b604082019050919050565b60006020820190508181036000830152611d9d81611d61565b9050919050565b6000606082019050611db960008301866117d2565b611dc660208301856117d2565b611dd360408301846116ca565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611e1582611667565b9150611e2083611667565b9250828201905080821115611e3857611e37611ddb565b5b92915050565b7f41756374696f6e2068617320656e646564000000000000000000000000000000600082015250565b6000611e74601183611933565b9150611e7f82611e3e565b602082019050919050565b60006020820190508181036000830152611ea381611e67565b9050919050565b7f42696420616d6f756e74206d7573742062652067726561746572207468616e2060008201527f7468652063757272656e74206869676865737420626964000000000000000000602082015250565b6000611f06603783611933565b9150611f1182611eaa565b604082019050919050565b60006020820190508181036000830152611f3581611ef9565b9050919050565b7f4e465420646f6573206e6f742065786973740000000000000000000000000000600082015250565b6000611f72601283611933565b9150611f7d82611f3c565b602082019050919050565b60006020820190508181036000830152611fa181611f65565b9050919050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611fea8261196e565b810181811067ffffffffffffffff8211171561200957612008611fb2565b5b80604052505050565b600061201c611653565b90506120288282611fe1565b919050565b600067ffffffffffffffff82111561204857612047611fb2565b5b6120518261196e565b9050602081019050919050565b600061207161206c8461202d565b612012565b90508281526020810184848401111561208d5761208c611fad565b5b612098848285611944565b509392505050565b600082601f8301126120b5576120b4611fa8565b5b81516120c584826020860161205e565b91505092915050565b6000602082840312156120e4576120e361165d565b5b600082015167ffffffffffffffff81111561210257612101611662565b5b61210e848285016120a0565b91505092915050565b7f41756374696f6e2068617320616c726561647920656e64656400000000000000600082015250565b600061214d601983611933565b915061215882612117565b602082019050919050565b6000602082019050818103600083015261217c81612140565b9050919050565b7f41756374696f6e20686173206e6f7420656e6465642079657400000000000000600082015250565b60006121b9601983611933565b91506121c482612183565b602082019050919050565b600060208201905081810360008301526121e8816121ac565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061224b602683611933565b9150612256826121ef565b604082019050919050565b6000602082019050818103600083015261227a8161223e565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006122b7602083611933565b91506122c282612281565b602082019050919050565b600060208201905081810360008301526122e6816122aa565b905091905056fea264697066735822122090adc925526609987d4aba200f07776f3c121569abdc8a0996a586dcbf637ecb64736f6c63430008160033";

type NFTAuctionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTAuctionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTAuction__factory extends ContractFactory {
  constructor(...args: NFTAuctionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _paymentTokenAddress: AddressLike,
    _NftContractAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _paymentTokenAddress,
      _NftContractAddress,
      overrides || {}
    );
  }
  override deploy(
    _paymentTokenAddress: AddressLike,
    _NftContractAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _paymentTokenAddress,
      _NftContractAddress,
      overrides || {}
    ) as Promise<
      NFTAuction & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): NFTAuction__factory {
    return super.connect(runner) as NFTAuction__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTAuctionInterface {
    return new Interface(_abi) as NFTAuctionInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): NFTAuction {
    return new Contract(address, _abi, runner) as unknown as NFTAuction;
  }
}