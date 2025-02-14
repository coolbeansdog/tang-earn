'use client';

import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from '@coinbase/onchainkit/identity';

import { Earn } from '@coinbase/onchainkit/earn';

export default function App() {
  return (
    <div className="relative flex flex-col min-h-screen font-sans text-gray-800">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/video/tangcat_bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <header className="pt-4 pr-4 relative z-10">
        <div className="flex justify-end">
          <div className="wallet-container">
            <Wallet>
              <ConnectWallet>
                <Avatar className="h-6 w-6" />
                <Name />
              </ConnectWallet>
              <WalletDropdown>
                <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                  <Avatar />
                  <Name />
                  <Address />
                  <EthBalance />
                </Identity>
                <WalletDropdownLink
                  icon="wallet"
                  href="https://keys.coinbase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wallet
                </WalletDropdownLink>
                <WalletDropdownDisconnect />
              </WalletDropdown>
            </Wallet>
          </div>
        </div>
      </header>

      {/* Centered Tang Cat-themed container */}
      <main className="flex-1 flex justify-center items-center relative z-10">
        <div className="grid grid-cols-3 gap-8 px-4">
          <div className="rounded-2xl shadow-lg bg-blue-200 bg-opacity-50 p-6 transform transition-all hover:scale-105 hover:shadow-xl">
            <Earn vaultAddress="0x7BfA7C4f149E7415b73bdeDfe609237e29CBF34A" />
          </div>
          <div className="rounded-2xl shadow-lg bg-blue-200 bg-opacity-50 p-6 transform transition-all hover:scale-105 hover:shadow-xl">
            <Earn vaultAddress="0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca" />
          </div>
          <div className="rounded-2xl shadow-lg bg-blue-200 bg-opacity-50 p-6 transform transition-all hover:scale-105 hover:shadow-xl">
            <Earn vaultAddress="0x616a4E1db48e22028f6bbf20444Cd3b8e3273738" />
          </div>
        </div>
      </main>

      {/* Footer with Tang Cat Branding */}
      <footer className="py-4 text-center text-sm text-gray-600 relative z-10">
        <div className="flex items-center justify-center space-x-2">
          <img
            src="/img/tangcat_clean.png" // Public folder path
            alt="Tang Cat Logo"
            className="h-8 w-8"
          />
          <span className="text-white text-xl font-semibold drop-shadow-lg">Built by Tang Cat, Powered by OnchainKit</span>
        </div>
      </footer>
    </div>
  );
}
