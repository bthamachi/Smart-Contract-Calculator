import type { EthSdkConfig } from '@dethcrypto/eth-sdk'

const config: EthSdkConfig = {
    contracts: {
        goerli: {
            calculator: '0x0b8a1019a6E130cc1a8Ad211CA01e02D39fa92d8',
        },
    },
    outputPath: "./contractTypes/"
}

export default config