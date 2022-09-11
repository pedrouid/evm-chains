export interface IChainData {
  name: string;
  chainId: number;
  shortName: string;
  chain: string;
  networkId: number;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpc: string[];
  faucets: string[];
  infoURL: string;
  ens?: {
    registry: string;
  };
  explorers?: { name: string; standard: string; url: string; icon?: string }[];
  icon?: string;
  network?: string;
  parent?: {
    chain: string;
    type: string;
    bridges?: { url: string }[];
  };
  slip44?: number;
  title?: string;
}
