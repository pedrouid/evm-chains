import axios from "axios";

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

export async function getAllChains(): Promise<IChainData[]> {
  const response = await axios.get("https://chainid.network/chains.json");
  return response.data;
}

export async function getChain(chainId: number): Promise<IChainData> {
  const response = await axios.get(
    `https://raw.githubusercontent.com/ethereum-lists/chains/master/_data/chains/${chainId}.json`
  );
  return response.data;
}

export async function getChainByChainId(chainId: number): Promise<IChainData> {
  const chainData = await getChain(chainId);
  return chainData;
}

export async function getChainByKeyValue(
  key: string,
  value: any
): Promise<IChainData> {
  const allChains = await getAllChains();

  let chainData = null;

  const matches = allChains.filter(chain => chain[key] === value);

  if (matches && matches.length) {
    chainData = matches[0];
  }

  if (!chainData) {
    throw new Error(`No chain found matching ${key}=${value}`);
  }

  return chainData;
}

export async function getChainByNetworkId(
  networkId: number
): Promise<IChainData> {
  const chainData = await getChainByKeyValue("networkId", networkId);
  return chainData;
}

export async function convertNetworkIdToChainId(
  networkId: number
): Promise<number> {
  const chainData = await getChainByNetworkId(networkId);
  return chainData.chainId;
}

export async function convertChainIdToNetworkId(
  chainId: number
): Promise<number> {
  const chainData = await getChain(chainId);
  return chainData.networkId;
}
