import {
  Address,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { contracts } from "../statics/contract";

export default function useApprove(amountIn: bigint | undefined) {
  console.log("amountIn", amountIn);

  const preparation = usePrepareContractWrite({
    address: contracts[56].wbnb.address as Address,
    abi: contracts[56].wbnb.abi,
    functionName: "approve",
    args: [
      contracts[56].pancakeRouterV3.address as Address,
      amountIn ? amountIn : BigInt("1000000000000000000000000"),
    ],
    onError(err) {
      console.error(err);
    },
  });

  const transaction = useContractWrite({
    ...preparation.config,
    onError(err) {
      console.log("tx error");
      console.error(err);
    },
  });

  const confirmation = useWaitForTransaction({
    confirmations: 2,
    hash: transaction.data?.hash,
    onError(error) {
      console.error(error);
    },
  });

  return { confirmation, transaction };
}
