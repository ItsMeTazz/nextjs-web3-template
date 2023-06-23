import wbnbABI from "./abis/wbnb.json";
import pancakeRouterV3ABI from './abis/pancakeV3Router.json'

export const contracts = {
  // As example, BSC chain with the WBNB Contract and ABI
  56: {
    wbnb: {
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      abi: wbnbABI,
    },

    pancakeRouterV3: {
      address: "0x13f4ea83d0bd40e75c8222255bc855a974568dd4",
      abi: pancakeRouterV3ABI,
    },
    // Add other contracts below
  },
  // Add other chains below
};
