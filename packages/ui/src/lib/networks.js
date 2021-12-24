import {
  nativeCurrencies,
  POLIS_IOTEX_BRIDGE,
  POLIS_MAINNET_BRIDGE,
} from "lib/constants";

export { POLIS_IOTEX_BRIDGE, POLIS_MAINNET_BRIDGE };

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
    "0x257Afcb6D246715b05910838b8BfbCe44124728F".toLowerCase(),
  homeMediatorAddress:
    "0xA7B568C5A029a5d8429b53c9F14a03411d156f7B".toLowerCase(),
  foreignAmbAddress: "0x0644725823181d8b7F60406d25A1F983012e7f42".toLowerCase(),
  homeAmbAddress: "0xe351Db03f4D5Ca12e455e4945738F953cbd3A23C".toLowerCase(),
  foreignGraphName: "polischain/polis-to-iotex-bridge",
  homeGraphName: "polischain/iotex-to-polis-bridge",
  claimDisabled: false,
  tokensClaimDisabled: [],
};

const ENABLED_BRIDGES = [POLIS_IOTEX_BRIDGE].map((b) =>
  b.toLowerCase()
);

const bridgeInfo = {
  [POLIS_MAINNET_BRIDGE]: POLIS_MAINNET_BRIDGE_CONFIG,
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
