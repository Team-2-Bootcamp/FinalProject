import { useEffect, useState } from "react";
import { NextPage } from "next";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

const Exchange: NextPage = () => {
  const [payAmount, setPayAmount] = useState<number>(0);
  const [receiveAmount, setReceiveAmount] = useState<number>(0);
  const [swapDirection, setSwapDirection] = useState<"auaToEth" | "ethToAua">("auaToEth");

  const handleSwapClick = () => {
    setSwapDirection(prevDirection => (prevDirection === "auaToEth" ? "ethToAua" : "auaToEth"));
    // Swap logic here, update payAmount and receiveAmount accordingly
    if (swapDirection === "auaToEth") {
      // Implement your logic to swap AuA to ETH
      // For example: setReceiveAmount(updatedReceiveAmount);
    } else {
      // Implement your logic to swap ETH to AuA
      // For example: setPayAmount(updatedPayAmount);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-slate-600 mt-20 min-h-full">
        <h2 className="text-center text-2xl font-semibold text-black mt-10">Exchange between AuA and ETH seamlessly</h2>
        <div className="bg-amber-500 rounded-lg p-10 shadow-2xl shadow-black mt-10 w-1/2 h-4/5 mb-20">
          <p className="text-left justify-left items-left font-bold bg-white rounded-lg p-2 w-14">Swap</p>
          <div className="w-full bg-amber-700 rounded-md p-4 font-semibold">
            <div className="flex justify-evenly">
              <div className="flex-item flex-wrap">
                <p className="font-semibold text-white">You pay</p>
                <input
                  className="p-3 bg-white w-28 rounded-lg"
                  type="text"
                  value={payAmount}
                  onChange={e => setPayAmount(Number(e.target.value))}
                />
              </div>

              <div className="flex-item">
                <p className="text-2xl font-bold text-white">
                  {swapDirection === "auaToEth" ? (
                    <img
                      src="/erc20logo.jpeg"
                      alt="image logo"
                      width={60}
                      height={60}
                      style={{ borderRadius: "50%" }}
                    />
                  ) : (
                    <img src="/ethlogo.png" alt="image logo" width={60} height={60} style={{ borderRadius: "50%" }} />
                  )}
                  {swapDirection === "auaToEth" ? "AuA" : "ETH"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center -mt-3" onClick={handleSwapClick} style={{ cursor: "pointer" }}>
            <div className="flex bg-black rounded-full w-12 p-3">
              <ArrowUpIcon className="h-5 w-5 text-white" />
              <ArrowDownIcon className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="w-full bg-amber-700 rounded-md p-4 font-semibold -mt-3">
            <div className="flex justify-evenly">
              <div className="flex-item flex-wrap">
                <p className="font-semibold text-white">You receive</p>
                <input
                  className="p-3 bg-white w-28 rounded-lg"
                  type="text"
                  value={receiveAmount}
                  onChange={e => setReceiveAmount(Number(e.target.value))}
                />
              </div>

              <div className="flex-item">
                <p className="text-2xl font-bold text-white">
                  {swapDirection === "auaToEth" ? (
                    <img src="/ethlogo.png" alt="image logo" width={60} height={60} style={{ borderRadius: "50%" }} />
                  ) : (
                    <img
                      src="/erc20logo.jpeg"
                      alt="image logo"
                      width={60}
                      height={60}
                      style={{ borderRadius: "50%" }}
                    />
                  )}
                  {swapDirection === "auaToEth" ? "ETH" : "AuA"}
                </p>
              </div>
            </div>
          </div>

          <button className="bg-amber-400 text-black rounded-md text-center w-full p-4 mt-4 font-bold hover:bg-slate-900 hover:text-white duration-700">
            Swap
          </button>
        </div>
      </div>
    </>
  );
};
export default Exchange;
