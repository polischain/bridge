import * as avalancheList from "./tokens/avalanche.json";
import * as bscList from "./tokens/bsc.json";
import * as fantomList from "./tokens/fantom.json";
import * as iotexList from "./tokens/iotex.json";
import * as mainnetList from "./tokens/mainnet.json";
import * as polisList from "./tokens/polis.json";
import * as polygonlist from "./tokens/polygon.json";

const fetchDefaultTokens = async (chainId) => {
  switch (chainId) {
    case 1:
      return mainnetList.tokens.filter((token) => token.chainId === chainId);
    case 56:
      return bscList.tokens.filter((token) => token.chainId === chainId);
    case 137:
      return polygonlist.tokens.filter((token) => token.chainId === chainId);
    case 250:
      return fantomList.tokens.filter((token) => token.chainId === chainId);
    case 4689:
      return iotexList.tokens.filter((token) => token.chainId === chainId);
    case 43114:
      return avalancheList.tokens.filter((token) => token.chainId === chainId);
    case 333999:
      return polisList.tokens.filter((token) => token.chainId === chainId);
    default:
      return [];
  }
};

export function memoize(method) {
  const cache = {};

  return async function memoized(...args) {
    const argString = JSON.stringify(args);
    cache[argString] = cache[argString] || (await method(...args));
    return cache[argString];
  };
}

export const fetchTokenList = memoize(async (chainId) =>
  fetchDefaultTokens(chainId)
);
