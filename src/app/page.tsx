"use client";
import Header from "@/src/components/Header";
import { motion } from "framer-motion";
import useSWR from "swr";
import useTokenBalance from "../hooks/useTokenBalance";
import { contracts } from "../statics/contract";
import { useAccount } from "wagmi";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

// Client rendered page via the 'use client'
// If your page doesn't have any user interaction, remove 'use client' which would render the page on the server side
export default function Home() {
  // Example of using SWR to fetch the price of BNB via DexScreener on the client side
  const { data: bnbData } = useSWR(
    `https://api.dexscreener.com/latest/dex/pairs/bsc/0x58f876857a02d6762e0101bb5c46a8c1ed44dc16`,
    fetcher,
    { refreshInterval: 30000 }
  );

  // Hooks to fetch connected wallet's address
  const { address } = useAccount();

  // Example of custom hooks, fetching WBNB Balance
  const wbnbBalance = useTokenBalance(contracts[56].wbnb.address);

  return (
    <main className="flex flex-col justify-center gap-16">
      <Header priceUSD={bnbData?.pairs[0].priceUsd} />

      {/* Fancy decoration. Remove this if not needed */}
      <video
        autoPlay
        muted
        loop
        className="object-cover top-0 left-0 w-screen h-screen fixed opacity-30 z-0"
      >
        <source src={"/videos/smoke.mp4"} type="video/mp4" />
      </video>
      {/* End of fancy decoration */}

      <section className="relative w-full px-4 md:px-7 flex">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="w-full flex flex-col justify-center items-center"
        >
          {/* Replace this div with whatever content you need. Good luck with your project :) */}
          <div className="tazz">0XTAZZ</div>
          <div>
            {address ? (
              <span>
                Balance: {wbnbBalance?.formatted} {wbnbBalance?.symbol}
              </span>
            ) : (
              <span>Connect Wallet to fetch WBNB balance</span>
            )}
          </div>
        </motion.div>
      </section>
    </main>
  );
}

{
  /* <Suspense fallback={<div>Loading</div>}>
<ViewCounter />
</Suspense> */
}
