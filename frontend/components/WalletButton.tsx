import React from 'react'
import { useWalletContext } from '../context/WalletContext'

const WalletButton = () => {
    const {
        connectWallet,
        isConnected,
        disconnectWallet
    } = useWalletContext()


    if (isConnected) {
        return (<div className="flex items-center justify-center">
            <p>Wallet Connected!</p>
            <button
                onClick={() => disconnectWallet()}
                className="px-4 border py-2 mx-4"
            >Disconnect Wallet</button>
        </div>)
    }


    return (
        <div>
            <button onClick={() => connectWallet()}>Connect Wallet</button>
        </div>
    )
}

export default WalletButton