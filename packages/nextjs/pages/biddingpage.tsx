import { useEffect, useState } from "react";
import { NextPage } from "next";

const Bidding: NextPage = () => {
  const [hours, setHours] = useState<number>(10);
  const [minutes, setMinutes] = useState<number>(24);
  const [seconds, setSeconds] = useState<number>(40);
  const [bidAmount, setBidAmount] = useState<number>(128);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the countdown values as needed
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
          } else {
            // Countdown reached zero, do something or clear the interval
            clearInterval(interval);
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [hours, minutes, seconds]);
  return (
    <>
      <div className="flex justify-between gap-6 mt-20 p-5 bg-slate-600">
        <div className="flex bg-amber-500 text-black rounded-lg">
          <img
            src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="Nft image"
            className="rounded-box w-1/2"
          />
          <div className="flex flex-col justify-center items-center p-4">
            <p className="w-full font-bold">
              Started at: <span className="text-slate-600 font-semibold">08:42 PM</span>
            </p>
            <p className="w-full font-bold">
              Ends at: <span className="text-slate-600 font-semibold">10:42 PM</span>{" "}
            </p>
            <p className="w-full font-bold">
              Top Bidder Address: <span className="text-slate-600 font-semibold">0xe34....0987</span>{" "}
            </p>
            <p className="w-full font-bold">
              Bid Amount: <span className="text-slate-600 font-semibold">127 AuA</span>
            </p>
            <p className="text-lg font-bold">Remaining time: </p>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": hours } as React.CSSProperties}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": minutes } as React.CSSProperties}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": seconds } as React.CSSProperties}></span>
                </span>
                sec
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-amber-400 w-2/5 rounded-lg p-3">
          <h1 className="text-2xl p-3 -mt-10 rounded-md shadow-xl shadow-black bg-slate-700 text-white">
            Set the highest bid and make the precious art your very own!!!
          </h1>
          <p className="text-black font-bold mt-5">
            Current Bid Amount(please set your bid amount above this amount): <span>127 AuA</span>
          </p>
          <label className="font-bold">
            <input
              className="rounded-md w-20 mr-4 p-2 mb-5 bg-black text-white"
              type="number"
              min={128}
              value={bidAmount}
              onChange={e => setBidAmount(Number(e.target.value))}
            />
            AuA
          </label>{" "}
          <button className="btn w-20 mt-5">Bid</button>
        </div>
      </div>
      <div className="flex flex-wrap justify-around bg-gray-400 rounded-lg p-3 overflow-y-scroll">
        <h1 className="text-2xl text-center font-bold mt-12 mb-12 w-full">Top 10 Bids</h1>
        <div className="flex-item w-1/3">
          <div className="rounded-lg bg-amber-500 w-full p-1.5 mb-3">
            <div className="flex justify-around">
              <div className="flex-item bg-slate-900 text-white rounded-3xl text-2xl font-bold p-6 -ml-5">1</div>
              <div className="flex-item">
                <h2 className="w-full font-bold text-2xl mt-2">
                  Address: <span>0xdhs33...9087</span>
                </h2>
                <p className="w-full font-bold text-xl">Amount: 25 AuA</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-amber-500 w-full p-1.5 mb-3">
            <div className="flex justify-around">
              <div className="flex-item bg-slate-900 text-white rounded-3xl text-2xl font-bold p-6 -ml-5">2</div>
              <div className="flex-item">
                <h2 className="w-full font-bold text-2xl mt-2">
                  Address: <span>0x34df33...9087</span>
                </h2>
                <p className="w-full font-bold text-xl">Amount: 24 AuA</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-amber-500 w-full p-1.5 mb-3">
            <div className="flex justify-around">
              <div className="flex-item bg-slate-900 text-white rounded-3xl text-2xl font-bold p-6 -ml-5">3</div>
              <div className="flex-item">
                <h2 className="w-full font-bold text-2xl mt-2">
                  Address: <span>0xgefd33...9087</span>
                </h2>
                <p className="w-full font-bold text-xl">Amount: 21 AuA</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-amber-500 w-full p-1.5 mb-3">
            <div className="flex justify-around">
              <div className="flex-item bg-slate-900 text-white rounded-3xl text-2xl font-bold p-6 -ml-5">4</div>
              <div className="flex-item">
                <h2 className="w-full font-bold text-2xl mt-2">
                  Address: <span>0xdhs33...9087</span>
                </h2>
                <p className="w-full font-bold text-xl">Amount: 19 AuA</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-amber-500 w-full p-1.5 mb-3">
            <div className="flex justify-around">
              <div className="flex-item bg-slate-900 text-white rounded-3xl text-2xl font-bold p-6 -ml-5">5</div>
              <div className="flex-item">
                <h2 className="w-full font-bold text-2xl mt-2">
                  Address: <span>0xdo833...9087</span>
                </h2>
                <p className="w-full font-bold text-xl">Amount: 17 AuA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-item w-1/3">
          <div className="rounded-lg bg-amber-500 w-full p-1.5 mb-3">
            <div className="flex justify-around">
              <div className="flex-item bg-slate-900 text-white rounded-3xl text-2xl font-bold p-6 -ml-5">6</div>
              <div className="flex-item">
                <h2 className="w-full font-bold text-2xl mt-2">
                  Address: <span>0xdh3233...9087</span>
                </h2>
                <p className="w-full font-bold text-xl">Amount: 13 AuA</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-amber-500 w-full p-1.5 mb-3">
            <div className="flex justify-around">
              <div className="flex-item bg-slate-900 text-white rounded-3xl text-2xl font-bold p-6 -ml-5">7</div>
              <div className="flex-item">
                <h2 className="w-full font-bold text-2xl mt-2">
                  Address: <span>0x25asfc...9087</span>
                </h2>
                <p className="w-full font-bold text-xl">Amount: 11 AuA</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-amber-500 w-full p-1.5 mb-3">
            <div className="flex justify-around">
              <div className="flex-item bg-slate-900 text-white rounded-3xl text-2xl font-bold p-6 -ml-5">8</div>
              <div className="flex-item">
                <h2 className="w-full font-bold text-2xl mt-2">
                  Address: <span>0x32sa33...9087</span>
                </h2>
                <p className="w-full font-bold text-xl">Amount: 10 AuA</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-amber-500 w-full p-1.5 mb-3">
            <div className="flex justify-around">
              <div className="flex-item bg-slate-900 text-white rounded-3xl text-2xl font-bold p-6 -ml-5">9</div>
              <div className="flex-item">
                <h2 className="w-full font-bold text-2xl mt-2">
                  Address: <span>0xd2as33...9087</span>
                </h2>
                <p className="w-full font-bold text-xl">Amount: 9 AuA</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-amber-500 w-full p-1.5 mb-3">
            <div className="flex justify-around">
              <div className="flex-item bg-slate-900 text-white rounded-3xl text-2xl font-bold p-6 -ml-5">10</div>
              <div className="flex-item">
                <h2 className="w-full font-bold text-2xl mt-2">
                  Address: <span>0xl21ko8...9087</span>
                </h2>
                <p className="w-full font-bold text-xl">Amount: 6 AuA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bidding;
