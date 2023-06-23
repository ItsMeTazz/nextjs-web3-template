import { Address, useAccount, useContractRead } from "wagmi";
import { contracts } from "../statics/contract";
import { parseEther } from "viem";

// Custom hook fetching the allowance of your WBNB to Pancake v3 router
export default function useAllowance() {
  const { address } = useAccount();

  const { data } = useContractRead({
    address: contracts[56].wbnb.address as Address,
    abi: contracts[56].wbnb.abi,
    functionName: "allowance",
    args: [
      address as Address,
      contracts[56].pancakeRouterV3.address as Address,
    ],
    watch: true,
  });

  return data ? (data as bigint) : parseEther("0");
}
