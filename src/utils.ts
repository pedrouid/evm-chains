import { chains } from './chains';
import { IChainData } from './types';

export function getAllChains(): IChainData[] {
  return chains;
}

export function getChain(chainId: number): IChainData {
  const chain = chains.find(x => x.chainId === chainId);
  if (typeof chain === 'undefined') {
    throw new Error(`No chain found matching chainId: ${chainId}`);
  }
  return chain;
}

export function getChainByChainId(chainId: number): IChainData {
  const chain = getChain(chainId);
  return chain;
}

export function getChainByKeyValue(key: string, value: any): IChainData {
  const allChains = getAllChains();

  let chain: IChainData | undefined;

  const matches = allChains.filter(chain => chain[key] === value);

  if (matches && matches.length) {
    chain = matches[0];
  }

  if (typeof chain === 'undefined') {
    throw new Error(`No chain found matching ${key}: ${value}`);
  }

  return chain;
}

export function getChainByNetworkId(networkId: number): IChainData {
  const chain = getChainByKeyValue('networkId', networkId);
  return chain;
}

export function convertNetworkIdToChainId(networkId: number): number {
  const chain = getChainByNetworkId(networkId);
  return chain.chainId;
}

export function convertChainIdToNetworkId(chainId: number): number {
  const chain = getChain(chainId);
  return chain.networkId;
}
