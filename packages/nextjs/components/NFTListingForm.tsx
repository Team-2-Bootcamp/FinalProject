import React, { useState } from "react";
import * as tokenJson from "../pages/assets/AuAToken.json";
import * as tokenJson2 from "../pages/assets/NFTAuction.json";
import { parseEther } from "viem";
import { useContractWrite } from "wagmi";

interface NFTListingFormProps {
  setListedNFT: React.Dispatch<React.SetStateAction<string | null>>;
  onListNFT: (startingPrice: number, startTime: number, duration: number) => void;
}

const NFTListingForm: React.FC<NFTListingFormProps> = ({ setListedNFT, onListNFT }) => {
  const [startingPrice, setStartingPrice] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const OpenModal = (params: { modalId: string }) => {
    const modal = document.getElementById(params.modalId) as HTMLDialogElement;
    modal.showModal();
  };
  function ApproveContract() {
    const { write, data, isLoading, isSuccess } = useContractWrite({
      address: "0x4E76921DFcc8d3C0bE5bE26Be77c5c904DF26981",
      abi: tokenJson.abi,
      functionName: "approve",
    });
    return (
      <>
        <div className="flex flex-col items-center justify-center bg w-250 h-200 bg-white rounded-lg p-10">
          <h2 className="text-bold text-xl">This transaction will approve allowance of 5 AuA to this platform!!</h2>
          <button
            className="btn btn-accent w-1/2 self-center"
            disabled={!write}
            onClick={() =>
              write({
                args: ["0x98E76202339C3787F2D1c6BFC4B03FC8C7c1f6D5", parseEther("5")],
              })
            }
          >
            Approve
          </button>
          {isLoading && <p className="font-bold self-center">Loading...</p>}
          {isSuccess && (
            <p className="font-bold rounded-lg bg-green-500 p-2">Transaction: {JSON.stringify(data?.hash)}</p>
          )}
          <div className="modal-action ">
            <form method="dialog">
              <button className="btn bg-red-500 hover:bg-red-700">Close</button>
            </form>
          </div>
        </div>
      </>
    );
  }
  function ListNFT() {
    const { write, data, isLoading, isSuccess } = useContractWrite({
      address: "0x98E76202339C3787F2D1c6BFC4B03FC8C7c1f6D5",
      abi: tokenJson2.abi,
      functionName: "listNFTForAuction",
    });
    return (
      <>
        <div className="flex flex-col items-center justify-center bg w-250 h-200 bg-white rounded-lg p-10">
          <h2 className="text-bold text-xl">This transaction will cost you 5 AuA!!</h2>
          <button
            className="btn btn-accent w-1/2 self-center"
            disabled={!write}
            onClick={() =>
              write({
                args: [parseEther(String(startingPrice)), startTime, duration],
              })
            }
          >
            List
          </button>
          {isLoading && <p className="font-bold self-center">Loading...</p>}
          {isSuccess && (
            <p className="font-bold rounded-lg bg-green-500 p-2">Transaction: {JSON.stringify(data?.hash)}</p>
          )}
          <div className="modal-action ">
            <form method="dialog">
              <button className="btn bg-red-500 hover:bg-red-700">Close</button>
            </form>
          </div>
        </div>
      </>
    );
  }

  const handleListNFT = async () => {
    // Basic validation
    if (!startingPrice || !startTime || !duration) {
      alert("Please fill in all fields");
      return;
    }

    // Call the provided onListNFT callback
    try {
      await onListNFT(startingPrice, startTime, duration);
      // Update state or perform other actions as needed
      setListedNFT(`NFT listed successfully.`);
    } catch (error) {
      // Handle errors
      console.error("Error listing NFT:", error);
      alert("Error listing NFT. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <dialog id="my_modal_1" className="modal">
        <ApproveContract></ApproveContract>
      </dialog>
      <dialog id="my_modal_2" className="modal">
        {" "}
        <ListNFT></ListNFT>
      </dialog>
      <h2 className="text-center text-2xl font-semibold text-amber-500 mt-10">List Your NFT for Auction</h2>
      <div className="mt-5 bg-slate-600 rounded-lg p-10 shadow-2xl shadow-black">
        <div className="form-group">
          <label className="text-white font-bold">
            Starting Price:
            <input
              className="ml-5 rounded-md p-2 mb-5 bg-black text-white"
              type="text"
              value={startingPrice}
              onChange={e => setStartingPrice(Number(e.target.value))}
            />
            AuA
          </label>
        </div>
        <div className="form-group">
          <label className="text-white font-bold">Start Time (seconds from now):</label>
          <input
            className="ml-5 rounded-md p-2 mb-5 bg-black text-white"
            type="text"
            value={startTime}
            onChange={e => setStartTime(Number(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label className="text-white font-bold">Auction Duration (in seconds):</label>
          <input
            className="ml-5 rounded-md p-2 mb-5 bg-black text-white"
            type="text"
            value={duration}
            onChange={e => setDuration(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col justify-center items center">
          <button
            className="bg-amber-500 rounded-md p-3 font-semibold hover:bg-slate-400 mb-5"
            onClick={() => {
              OpenModal({
                modalId: "my_modal_1",
              });
            }}
          >
            Approve
          </button>
          <button
            className="bg-amber-500 rounded-md p-3 font-semibold hover:bg-slate-400"
            onClick={() => {
              OpenModal({
                modalId: "my_modal_2",
              });
            }}
          >
            List NFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTListingForm;
