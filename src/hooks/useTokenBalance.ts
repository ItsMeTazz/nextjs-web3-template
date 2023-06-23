import { Address, useAccount, useBalance } from "wagmi";

// Example of custom hook to fetch a specific token balance
export default function useTokenBalance(token: string | undefined) {
  const { address } = useAccount();

  const { data } = useBalance({
    address: address,
    token: token ? (token as Address) : undefined,
    watch: true,
  });

  return data;
}
