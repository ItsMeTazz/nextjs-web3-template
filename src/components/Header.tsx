import { BsDiscord, BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/src/statics/images/logo.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header({ priceUSD }: { priceUSD: string }) {
  return (
    <nav className="relative mt-7 w-full flex flex-col md:flex-row justify-start px-4 md:px-7">
      <div className="absolute -top-2 left-2 md:left-5 w-7 h-7 border-l-2 border-t-2 border-green-400/60" />
      <div className="absolute -bottom-2 right-2 md:right-5 w-7 h-7 border-r-2 border-b-2 border-green-400/60" />
      <motion.div
        initial={{
          opacity: 0.5,
          width: 0,
        }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}
        className="overflow-hidden group w-full flex h-16 z-50 items-center backdrop-blur-md bg-slate-100/20"
      >
        <div className="w-20 h-full">
          <motion.div
            initial={{
              width: "10%",
            }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 2, ease: [0.42, 0, 0.58, 1] }}
            className="w-full h-full bg-green-400 flex justify-center items-center"
          >
            <Image src={logo} alt="logo" className="p-3" />
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1, ease: "linear" }}
          className="relative h-full px-5 text-4xl flex items-center w-full"
        >
          <span className="text-green-400 translate-y-20 group-hover:translate-y-0 transition-all">
            0
          </span>
          <span className="text-green-400 -translate-y-20 group-hover:translate-y-0 transition-all">
            x
          </span>
          Tazz
          <div className="absolute bottom-1 right-2 text-sm text-slate-200">
            {priceUSD ? `$${Number(priceUSD).toFixed(4)}` : "Loading"}
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          height: 0,
        }}
        animate={{ opacity: 1, height: "4rem" }}
        transition={{ delay: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] }}
        className="z-50 w-full flex h-16 backdrop-blur-md"
      >
        <div className="flex h-full w-full">
          <a
            href="YOUR_DISCORD_LINK"
            target="_blank"
            className="backdrop-blur-md group cursor-pointer relative w-3/4 flex justify-center items-center border-[1px] border-slate-100/20 h-full hover:text-black transition-colors duration-500"
          >
            <div className="z-10 uppercase">Whitepaper</div>
            <div className="z-0 group-hover:w-full bg-green-400 absolute bottom-0 h-full w-0 left-0 transition-all ease-in-out duration-500" />
            <div className="absolute bottom-1 left-1 text-xs text-green-400">
              Wp
            </div>
          </a>
          <a
            href="YOUR_DISCORD_LINK"
            target="_blank"
            className="backdrop-blur-md group cursor-pointer relative w-1/4 flex justify-center items-center border-[1px] border-slate-100/20 h-full hover:text-black transition-colors duration-500"
          >
            <BsDiscord size={23} className="z-10 group-hover:animate-wiggle" />

            <div className="z-0 group-hover:w-full bg-green-400 absolute bottom-0 h-full w-0 left-0 transition-all ease-in-out duration-500" />
            <div className="absolute bottom-1 left-1 text-xs text-green-400">
              Di
            </div>
          </a>
        </div>
        <div className="flex h-full w-full">
          <a
            href="YOUR_TWITTER_LINK"
            target="_blank"
            className="backdrop-blur-md group cursor-pointer relative w-1/4 flex justify-center items-center border-[1px] border-slate-100/20 h-full hover:text-black transition-colors duration-500"
          >
            <BsTwitter size={23} className="z-10 group-hover:animate-wiggle" />
            <div className="z-0 group-hover:w-full bg-green-400 absolute bottom-0 h-full w-0 left-0 transition-all ease-in-out duration-500" />
            <div className="absolute bottom-1 left-1 text-xs text-green-400">
              Tw
            </div>
          </a>
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              // Note: If your app doesn't use authentication, you
              // can remove all 'authenticationStatus' checks
              const ready = mounted && authenticationStatus !== "loading";
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === "authenticated");

              return (
                <div className="backdrop-blur-md group cursor-pointer relative w-3/4 flex justify-center items-center border-[1px] border-slate-100/20 h-full hover:text-black transition-colors duration-500">
                  <div
                    className="z-10 h-full w-full flex justify-center items-center"
                    {...(!ready && {
                      "aria-hidden": true,
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <button
                            onClick={openConnectModal}
                            type="button"
                            className="w-full h-full"
                          >
                            CONNECT WALLET
                          </button>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <button
                            className="w-full h-full bg-red-100/20"
                            onClick={openChainModal}
                            type="button"
                          >
                            Wrong network
                          </button>
                        );
                      }

                      return (
                        <div
                          onClick={openAccountModal}
                          className="w-full h-full flex items-center justify-center gap-3"
                        >
                          {chain.hasIcon && (
                            <div
                              style={{
                                background: chain.iconBackground,
                                width: 20,
                                height: 20,
                                borderRadius: 999,
                                overflow: "hidden",
                                marginRight: 4,
                              }}
                            >
                              {chain.iconUrl && (
                                <Image
                                  alt={chain.name ?? "Chain icon"}
                                  src={chain.iconUrl}
                                  width={20}
                                  height={20}
                                />
                              )}
                            </div>
                          )}

                          <div>
                            {account.displayName}
                            {account.displayBalance
                              ? ` (${account.displayBalance})`
                              : ""}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                  <div className="z-0 group-hover:w-full bg-green-400 absolute bottom-0 h-full w-0 left-0 transition-all ease-in-out duration-500" />
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
      </motion.div>
    </nav>
  );
}
