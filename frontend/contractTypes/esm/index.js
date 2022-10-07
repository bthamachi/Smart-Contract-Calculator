import { Contract } from 'ethers';
import goerli_calculator_abi from '../../eth-sdk/abis/goerli/calculator.json';
export function getContract(address, abi, defaultSignerOrProvider) {
    return new Contract(address, abi, defaultSignerOrProvider);
}
export function getGoerliSdk(defaultSignerOrProvider) {
    return {
        "calculator": getContract('0x0b8a1019a6E130cc1a8Ad211CA01e02D39fa92d8', goerli_calculator_abi, defaultSignerOrProvider),
    };
}
