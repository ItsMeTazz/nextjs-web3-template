import {
  Address,
  useAccount,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { contracts } from "../statics/contract";

export default function useSwap(
  amountIn: BigInt,
  tokenIn: string,
  tokenOut: string,
  amountOutWithSlippage: BigInt
) {
  const { address } = useAccount();
  const preparation = usePrepareContractWrite({
    address: contracts[56].pancakeRouterV3.address as Address,
    abi: contracts[56].pancakeRouterV3.abi,
    functionName: "swapExactTokensForTokens",
    args: [amountIn, amountOutWithSlippage, [tokenIn, tokenOut], address],
    value:
      tokenIn === contracts[56].wbnb.address ? (amountIn as bigint) : undefined,
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
