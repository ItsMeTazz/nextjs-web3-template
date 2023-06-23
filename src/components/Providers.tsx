"use client";

import { useEffect, useState } from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bsc } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [bsc], // or other chains
  [publicProvider()] // make sure to switch to another provider as the public provider has limitations and isn't recommended for production apps
);

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID
  ? process.env.NEXT_PUBLIC_WALLET_CONNECT_ID
  : "";

const { wallets } = getDefaultWallets({
  appName: "NextJS Web3 Template",
  projectId,
  chains,
});

const demoAppInfo = {
  appName: "NextJS Web3 Template",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        theme={darkTheme()}
        chains={chains}
        appInfo={demoAppInfo}
      >
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
