import { Address, useAccount, useBalance } from "wagmi";

export default function useTokenBalance(token: string | undefined) {
  const { address } = useAccount();

  const { data } = useBalance({
    address: address,
    token: token ? (token as Address) : undefined,
    watch: true,
  });

  return data;
}
