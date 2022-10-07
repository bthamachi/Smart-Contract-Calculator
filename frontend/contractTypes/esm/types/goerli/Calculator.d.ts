import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface CalculatorInterface extends utils.Interface {
    functions: {
        "add(int256,int256)": FunctionFragment;
        "minus(int256,int256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "add" | "minus"): FunctionFragment;
    encodeFunctionData(functionFragment: "add", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "minus", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minus", data: BytesLike): Result;
    events: {};
}
export interface Calculator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CalculatorInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        add(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        minus(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    add(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    minus(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        add(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        minus(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        add(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        minus(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        add(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minus(a: PromiseOrValue<BigNumberish>, b: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
