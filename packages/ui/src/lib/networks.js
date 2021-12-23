import {
  nativeCurrencies,
  POLIS_BSC_BRIDGE,
  POLIS_IOTEX_BRIDGE,
  POLIS_MAINNET_BRIDGE,
} from "lib/constants";

export { POLIS_BSC_BRIDGE, POLIS_IOTEX_BRIDGE, POLIS_MAINNET_BRIDGE };

const POLIS_BSC_BRIDGE_CONFIG = {
  label: "polis / bsc",
  homeChainId: 333999,
  foreignChainId: 56,
  enableReversedBridge: true,
  enableForeignCurrencyBridge: true,
  foreignMediatorAddress:
    "0x75fBF4e5aD4b725Bb4E300B6b2572596f87CA2D3".toLowerCase(),
  homeMediatorAddress:
    "0x9CEBA3f59CE10F65311B56D5eF3895Ffbc3245e3".toLowerCase(),
  foreignAmbAddress: "0xF34029CD8A376f30d65Bf8f71C3bBFA01Fab91a3".toLowerCase(),
  homeAmbAddress: "0x731885890fdF7e53311A7271eb0713E7dbC25E8a".toLowerCase(),
  foreignGraphName: "polischain/polis-to-bsc-bridge",
  homeGraphName: "polischain/bsc-to-polis-bridge",
  claimDisabled: false,
  tokensClaimDisabled: [],
};

const POLIS_MAINNET_BRIDGE_CONFIG = {
  label: "polis / eth",
  homeChainId: 333999,
  foreignChainId: 1,
  enableReversedBridge: true,
  enableForeignCurrencyBridge: true,
  foreignMediatorAddress:
    "0x1A44a4c868D04E63b1823A98114580E067c29c97".toLowerCase(),
  homeMediatorAddress:
    "0xfc92b2DF91c8F6E6ECcBB75b45F21c359614cC87".toLowerCase(),
  foreignAmbAddress: "0x5172747f21EE6D4065CE9a36691D3b579bfCDf20".toLowerCase(),
  homeAmbAddress: "0x651581b964A22bCE9eAfCE0a762189d2D04cAe6a".toLowerCase(),
  foreignGraphName: "polischain/polis-to-mainnet",
  homeGraphName: "polischain/mainnet-to-polis-bridge",
  claimDisabled: false,
  tokensClaimDisabled: [],
};

const POLIS_IOTEX_BRIDGE_CONFIG = {
  label: "polis / iotex",
  homeChainId: 333999,
  foreignChainId: 4689,
  enableReversedBridge: true,
  enableForeignCurrencyBridge: true,
  foreignMediatorAddress:
    "0xB48C98c335A5109275A68EBcE9A959ef989bCeCB".toLowerCase(),
  homeMediatorAddress:
    "0xCb3c4a052a6823Dc4BedcAC58C95290Fce0d5Daa".toLowerCase(),
  foreignAmbAddress: "0x5F05B526a5226A8270b078c3569EEb4e95a66a28".toLowerCase(),
  homeAmbAddress: "0xf86EFED732234882A39Ee13e0A6B9e5253d86AB9".toLowerCase(),
  foreignGraphName: "polischain/polis-to-iotex-bridge",
  homeGraphName: "polischain/iotex-to-polis-bridge",
  claimDisabled: false,
  tokensClaimDisabled: [],
};

const ENABLED_BRIDGES = [POLIS_BSC_BRIDGE, POLIS_IOTEX_BRIDGE].map((b) =>
  b.toLowerCase()
);

const bridgeInfo = {
  [POLIS_MAINNET_BRIDGE]: POLIS_MAINNET_BRIDGE_CONFIG,
  [POLIS_BSC_BRIDGE]: POLIS_BSC_BRIDGE_CONFIG,
  [POLIS_IOTEX_BRIDGE]: POLIS_IOTEX_BRIDGE_CONFIG,
};

const getNetworkConfig = (bridges) => {
  if (bridges && bridges.length > 0 && bridgeInfo) {
    return bridges.reduce((t, b) => ({ ...t, [b]: bridgeInfo[b] }), {});
  }
  return bridgeInfo;
};

export const networks = getNetworkConfig(ENABLED_BRIDGES);

export const defaultTokens = {
  [POLIS_MAINNET_BRIDGE]: {
    1: nativeCurrencies[1],
    333999: {
      address: "0xDb6D07410F3b4e73553Ede8aFc2FC6922B19863E",
      chainId: 333999,
      symbol: "WETH",
      name: "Wrapped ETH from Mainnet",
    },
  },
  [POLIS_BSC_BRIDGE]: {
    56: nativeCurrencies[56],
    333999: {
      address: "0xDb6D07410F3b4e73553Ede8aFc2FC6922B19863E",
      chainId: 333999,
      symbol: "WBNB",
      name: "Wrapped BNB from BSC",
    },
  },
  [POLIS_IOTEX_BRIDGE]: {
    4689: nativeCurrencies[4689],
    333999: {
      address: "0xB2c97E7BD98490Fe6D6134F593E74008B5ECD9F4",
      chainId: 333999,
      symbol: "WIOTEX",
      name: "Wrapped IoTeX from IoTeX",
    },
  },
};
