
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import WalletButton from "../components/WalletButton";
import { useWalletContext } from "../context/WalletContext";
import React from 'react';

const Home: NextPage = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("")
  const {
    contractInterface,
    isConnected

  } = useWalletContext()


  const [result, setResult] = useState(0);


  const onAdd = async (e: any) => {
    e.preventDefault()
    const res = await contractInterface?.calculator.add(parseInt(a), parseInt(b))
    if (res) {
      setResult(res?.toNumber())
    }
  }

  const onMinus = async (e: any) => {
    e.preventDefault()
    const res = await contractInterface?.calculator.minus(parseInt(a), parseInt(b))
    if (res) {
      setResult(res?.toNumber())
    }

  }


  return (
    <>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">

        <WalletButton />
        {!isConnected && <p>Please connect your wallet to see the rest of the app</p>}

        {isConnected &&
          <><p>Your last calculation was {result}</p>
            <div className="flex flex-col">
              <h1>Calculator</h1>
              <form>
                <div>
                  <label>First Value</label>
                  <input
                    onChange={(e) => setA(e.target.value)}
                    value={a}
                    className="border mx-4" type="text" />
                </div>
                <div>
                  <label>Second Value</label>
                  <input
                    onChange={(e) => setB(e.target.value)}
                    className="border mx-4" type="text" value={b} />
                </div>

                <button
                  onClick={(e) => onAdd(e)}
                  className="border">
                  Add
                </button>
                <button
                  onClick={(e) => onMinus(e)}
                  className="border">
                  Minus
                </button>
              </form></div></>}

      </main>
    </>
  );
};

export default Home;
