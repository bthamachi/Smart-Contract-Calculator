"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoerliSdk = exports.getContract = void 0;
const ethers_1 = require("ethers");
const calculator_json_1 = __importDefault(require("../../eth-sdk/abis/goerli/calculator.json"));
function getContract(address, abi, defaultSignerOrProvider) {
    return new ethers_1.Contract(address, abi, defaultSignerOrProvider);
}
exports.getContract = getContract;
function getGoerliSdk(defaultSignerOrProvider) {
    return {
        "calculator": getContract('0x0b8a1019a6E130cc1a8Ad211CA01e02D39fa92d8', calculator_json_1.default, defaultSignerOrProvider),
    };
}
exports.getGoerliSdk = getGoerliSdk;
