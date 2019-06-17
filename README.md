# evm-chains

Package to get chain data from ethereum-lists/chains

## Install

```sh
npm install --save evm-chains

#or

yarn add evm-chains
```

## API

```typescript
async function getAllChains(): Promise<IChainData[]>;
async function getChain(chainId: number): Promise<IChainData>;
async function getChainByChainId(chainId: number): Promise<IChainData>;
async function getChainByKeyValue(key: string, value: any): Promise<IChainData>;
async function getChainByNetworkId(networkId: number): Promise<number>;
async function convertNetworkIdToChainId(networkId: number): Promise<number>;
async function convertChainIdToNetworkId(chainId: number): Promise<number>;
```

## Types

```typescript
interface IChainData {
  name: string;
  chain: string;
  network: string;
  rpc: string[];
  faucets: string[];
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  infoURL: string;
  shortName: string;
  chainId: number;
  networkId: number;
}
```
