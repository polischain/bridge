import { BigNumber } from "ethers";

export const POLIS_BSC_BRIDGE = "polis-bsc";
export const POLIS_IOTEX_BRIDGE = "polis-iotex";
export const POLIS_MAINNET_BRIDGE = "polis-mainnet";

export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";

export const ETHEREUM_CURRENCY_LOGO =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png";

export const BNB_CURRENCY_LOGO =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png";

export const IOTEX_CURRENCY_LOGO =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/2777.png";

export const LARGEST_UINT256 = BigNumber.from(
  "115792089237316195423570985008687907853269984665640564039457584007913129639935"
);

export const POLLING_INTERVAL = 5000;

export const DEFAULT_BRIDGE_DIRECTION = POLIS_MAINNET_BRIDGE;

export const nativeCurrencies = {
  1: {
    chainId: 1,
    decimals: 18,
    logoURI: ETHEREUM_CURRENCY_LOGO,
    name: "Ethereum",
    address: ADDRESS_ZERO,
    symbol: "ETH",
    mode: "NATIVE",
    homeTokenAddress:
      "0x5B5B05D93c7e374a6D223BFA9591281fbf48237F".toLowerCase(),
  },
  56: {
    chainId: 56,
    decimals: 18,
    logoURI: BNB_CURRENCY_LOGO,
    name: "Binance Coin",
    address: ADDRESS_ZERO,
    symbol: "BNB",
    mode: "NATIVE",
    homeTokenAddress:
      "0xDb6D07410F3b4e73553Ede8aFc2FC6922B19863E".toLowerCase(),
  },
  4689: {
    chainId: 4689,
    decimals: 18,
    logoURI: IOTEX_CURRENCY_LOGO,
    name: "IoTeX",
    address: ADDRESS_ZERO,
    symbol: "IOTEX",
    mode: "NATIVE",
    homeTokenAddress:
      "0x5DF748dD4C0acf81a1a943EB52a0d0325b4d3B94".toLowerCase(),
  },
};

export const nativeCurrencyMediators = {
  1: "0xa05924cbd2a8434b3993394b9bed122583a783ad".toLowerCase(),
  56: "0x7d5d0ba109a6b9f6dde7d2a89a8150b589d49504".toLowerCase(),
  4689: "0xf4Ce1C6d4eF79d5661AfAA6678892446822Cb558".toLowerCase(),
};

export const networkNames = {
  1: "Mainnet",
  56: "Binance Smart Chain",
  4689: "IoTeX",
  333999: "Polis Olympus Chain",
};

export const networkLabels = {
  1: "Mainnet",
  56: "BSC",
  4689: "IoTeX",
  333999: "Polis",
};

export const networkCurrencies = {
  1: {
    name: "Ethereum",
    symbol: "ETH",
  },
  56: {
    name: "Binance Coin",
    symbol: "BNB",
  },
  4689: {
    name: "IoTeX",
    symbol: "IOTEX",
  },
  333999: {
    name: "Polis",
    symbol: "POLIS",
  },
};

export const chainUrls = {
  1: {
    rpc: [
      "https://speedy-nodes-nyc.moralis.io/af0b2b28274f65d74267f0f2/eth/mainnet",
    ],
    explorer: "https://etherscan.io",
    chainId: 1,
    name: networkNames[1],
  },
  56: {
    rpc: ["https://bsc-dataseed.binance.org/"],
    explorer: "https://bscscan.com",
    chainId: 56,
    name: networkNames[56],
  },
  4689: {
    rpc: ["https://babel-api.mainnet.iotex.io"],
    explorer: "https://iotexscan.io",
    chainId: 4689,
    name: networkNames[4689],
  },
  333999: {
    rpc: ["https://rpc.polis.tech"],
    explorer: "https://explorer.polis.tech",
    chainId: 333999,
    name: networkNames[333999],
  },
};

export const LOCAL_STORAGE_KEYS = {
  BRIDGE_DIRECTION: "bridge-direction",
  MAINNET_RPC_URL: "mainnet-rpc-url",
  POLIS_RPC_URL: "polis-rpc-url",
  BSC_RPC_URL: "bsc-rpc-url",
  IOTEX_RPC_URL: "iotex-rpc-url",
};
