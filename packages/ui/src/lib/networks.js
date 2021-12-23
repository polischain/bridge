import {
  nativeCurrencies,
  POLIS_AVALANCHE_BRIDGE,
  POLIS_BSC_BRIDGE,
  POLIS_FANTOM_BRIDGE,
  POLIS_IOTEX_BRIDGE,
  POLIS_MAINNET_BRIDGE,
  POLIS_POLYGON_BRIDGE,
} from "lib/constants";

export {
  POLIS_AVALANCHE_BRIDGE,
  POLIS_BSC_BRIDGE,
  POLIS_FANTOM_BRIDGE,
  POLIS_IOTEX_BRIDGE,
  POLIS_MAINNET_BRIDGE,
  POLIS_POLYGON_BRIDGE,
};

const POLIS_AVALANCHE_BRIDGE_CONFIG = {
  label: "polis / avalanche",
  homeChainId: 333999,
  foreignChainId: 43114,
  enableReversedBridge: true,
  enableForeignCurrencyBridge: true,
  foreignMediatorAddress:
    "0xfB59876201405Aee8D8aDa645b168AFEdb442F76".toLowerCase(),
  homeMediatorAddress:
    "0xfB59876201405Aee8D8aDa645b168AFEdb442F76".toLowerCase(),
  foreignAmbAddress: "0xd66650Db783296918d11EdaE2FA6F191e9F7f884".toLowerCase(),
  homeAmbAddress: "0xd66650Db783296918d11EdaE2FA6F191e9F7f884".toLowerCase(),
  foreignGraphName: "mrwh0/polistoavalance",
  homeGraphName: "polischain/avalanche-to-polis-bridge",
  claimDisabled: false,
  tokensClaimDisabled: [],
};
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
    "0x4f7488D150eA5295d20c8f0E3524b7897b1b7021".toLowerCase(),
  homeMediatorAddress:
    "0x96ba6eFcF8c12547fd4a069370602904D50e4d34".toLowerCase(),
  foreignAmbAddress: "0x5172747f21EE6D4065CE9a36691D3b579bfCDf20".toLowerCase(),
  homeAmbAddress: "0x651581b964A22bCE9eAfCE0a762189d2D04cAe6a".toLowerCase(),
  foreignGraphName: "polischain/polis-to-mainnet",
  homeGraphName: "polischain/mainnet-to-polis-bridge",
  claimDisabled: false,
  tokensClaimDisabled: [],
};

const POLIS_POLYGON_BRIDGE_CONFIG = {
  label: "polis / polygon",
  homeChainId: 333999,
  foreignChainId: 137,
  enableReversedBridge: true,
  enableForeignCurrencyBridge: true,
  foreignMediatorAddress:
    "0xDA4Afcd8c7305AbedEb676768b04D29412d60eFB".toLowerCase(),
  homeMediatorAddress:
    "0x0306BcA3Ea988112acf420aA58EBAbA40040A1Fd".toLowerCase(),
  foreignAmbAddress: "0x5F05B526a5226A8270b078c3569EEb4e95a66a28".toLowerCase(),
  homeAmbAddress: "0xa85f128B9cb883AaC4DF5272f206890D623EC2f8".toLowerCase(),
  foreignGraphName: "polischain/polis-to-polygon-bridge",
  homeGraphName: "polischain/polygon-to-polis-bridge",
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
    "0xE472D737424809898F3d508464671C57D7d392b4".toLowerCase(),
  homeMediatorAddress:
    "0x9E397A9886cec70634689e01e7345ce5a8361bFe".toLowerCase(),
  foreignAmbAddress: "0x5F05B526a5226A8270b078c3569EEb4e95a66a28".toLowerCase(),
  homeAmbAddress: "0xf86EFED732234882A39Ee13e0A6B9e5253d86AB9".toLowerCase(),
  foreignGraphName: "polischain/polis-to-iotex-bridge",
  homeGraphName: "polischain/iotex-to-polis-bridge",
  claimDisabled: true,
  tokensClaimDisabled: [],
};
const POLIS_FANTOM_BRIDGE_CONFIG = {
  label: "polis / fantom",
  homeChainId: 333999,
  foreignChainId: 250,
  enableReversedBridge: true,
  enableForeignCurrencyBridge: true,
  foreignMediatorAddress:
    "0xf4Ce1C6d4eF79d5661AfAA6678892446822Cb558".toLowerCase(),
  homeMediatorAddress:
    "0x26f898A29CD9Ea4c327037547DF6FA7E2967b8D6".toLowerCase(),
  foreignAmbAddress: "0xF34029CD8A376f30d65Bf8f71C3bBFA01Fab91a3".toLowerCase(),
  homeAmbAddress: "0x9411446287A9DE0Fc02B8bB0201E3d401d7615F4".toLowerCase(),
  foreignGraphName: "polischain/polis-to-fantom-bridge",
  homeGraphName: "polischain/fantom-to-polis-bridge",
  claimDisabled: false,
  tokensClaimDisabled: [],
};

const ENABLED_BRIDGES = [
  POLIS_BSC_BRIDGE,
  POLIS_IOTEX_BRIDGE,
].map((b) => b.toLowerCase());

const bridgeInfo = {
  [POLIS_FANTOM_BRIDGE]: POLIS_FANTOM_BRIDGE_CONFIG,
  [POLIS_POLYGON_BRIDGE]: POLIS_POLYGON_BRIDGE_CONFIG,
  [POLIS_AVALANCHE_BRIDGE]: POLIS_AVALANCHE_BRIDGE_CONFIG,
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
