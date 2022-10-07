// src/context/state.js
import { createContext, useContext, useEffect, useState } from 'react';
import Web3Modal from "web3modal";
import { providers } from "ethers";
import { getGoerliSdk, GoerliSdk } from '../contractTypes';


type WalletContextType = {
    connectWallet: () => void;
    disconnectWallet: () => void;
    // This is a custom type provided by eth-sdk
    contractInterface: GoerliSdk | undefined;
    isConnected: boolean;
}

const WalletContext = createContext<WalletContextType>(null!);

//@ts-ignore
export function WalletWrapper({ children }) {

    const [modal, setModal] = useState<Web3Modal>()
    const [sdk, setSdk] = useState<GoerliSdk>()
    const [walletConnected, setWalletConnected] = useState(false);

    useEffect(() => {
        const modal = new Web3Modal({
            network: "goerli"
        })
        setModal(modal)
        console.log(modal.cachedProvider)
    }, [])


    const connectWallet = async () => {
        if (!modal) {
            throw new Error("Modal must be initialised to connect wallet")
        }
        //Initialise Information
        const provider = await modal?.connect()
        const web3Provider = await new providers.Web3Provider(provider)
        const signer = web3Provider.getSigner()

        const contracts = getGoerliSdk(signer)

        //Update State
        setSdk(contracts)
        setWalletConnected(true)
    }


    const disconnectWallet = async () => {
        if (!modal) {
            throw new Error("Modal must be initialised to disconnect wallet")


        }
        await modal?.clearCachedProvider()
        setWalletConnected(false)
    }



    const sharedState = {
        connectWallet,
        isConnected: walletConnected,
        disconnectWallet,
        contractInterface: sdk
    }

    return (
        <WalletContext.Provider value={sharedState}>
            {children}
        </WalletContext.Provider>
    );
}

export function useWalletContext() {
    return useContext(WalletContext);
}