This is a [Next.js](https://nextjs.org/) v13.4.6 template bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) ready for Web3 and that includes: 
- [TailwindCSS](https://tailwindcss.com/): CSS framework
- [RainbowKit](https://www.rainbowkit.com/): Web3 Wallet Connector
- [Wagmi](https://wagmi.sh/): React Hooks for Ethereum
- [Viem](https://viem.sh/): TypeScript Interface for Ethereum
- [Vercel Analytics](https://vercel.com/analytics): Web Analytics and Insights
- [Framer Motion](https://www.framer.com/motion/): Motion & Animation library
- [SWR](https://swr.vercel.app/): React Hooks for Data Fetching

## Getting Started

First, clone or use the template and:
- Get your Wallet Project Id here: https://cloud.walletconnect.com/. This is a required step to use RainbowKit and connect your wallet
- Make a copy of the ```.env.example``` file at the root of the project and rename it ```.env.local```
- In the .env.local file, replace ```YOUR_ID``` with your Wallet Project Id for the ```NEXT_PUBLIC_WALLET_CONNECT_ID``` variable
- Then, the usual for a Next.js app. To install the project dependencies, open a console, go to the root of the project and run ```yarn```
- To run the project locally, run ```yarn dev```
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result
- Congrats! You should see a big fat green screen and text appearing
![image](https://github.com/ItsMeTazz/nextjs-web3-template/assets/104685150/2669ed17-af27-47ac-b9f9-47ea9f9e81c0)

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This template will deploy seamlessly on [Vercel](https://vercel.com/). Just make sure to also add the environment variable to your Vercel settings.

## Additional Information

For your convenience, I have preconfigured and coded a few things for you: 
- a [Suspense](https://react.dev/reference/react/Suspense) and a loading component. This will show up when your main page is loading. As it stands, the page loads too fast to even see the Loading Component, but as soon as you add more logic, you'll see it :)
- A Provider component for the configuration of RainbowKit and Wagmi ```/src/components/Providers.tsx```
- A good looking Header component that you can customize at your taste ```/src/components/Header.tsx```
- A few custom hooks to demonstrate how to fetch data on chain using Wagmi the proper way (Read and Write) ```/src/hooks```
- A few ABIs to serve as example ```/src/statics/abis```
- RainbowKit and Wagmi are ready to connect to the BSC chain and fetch your WBNB balance. ```/src/hooks/useTokenBalance.ts```
- Some cool animations using Framer Motion to show some usage examples. Feel free to reuse, adapt, modify and have fun with it!

**Hope you enjoy the conveniency of this template!**

Feel free to reach out on Discord if you have any questions! ```Tazz#5698```
