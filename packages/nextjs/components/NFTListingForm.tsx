import React, { useState } from "react";

interface NFTListingFormProps {
  setListedNFT: React.Dispatch<React.SetStateAction<string | null>>;
  onListNFT: (nftContract: string, tokenId: number, startingPrice: number, startTime: number, duration: number) => void;
}

const NFTListingForm: React.FC<NFTListingFormProps> = ({ setListedNFT, onListNFT }) => {
  const [nftContract, setNFTContract] = useState<string>("");
  const [tokenId, setTokenId] = useState<number>(0);
  const [startingPrice, setStartingPrice] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const handleListNFT = async () => {
    // Basic validation
    if (!nftContract || !tokenId || !startingPrice || !startTime || !duration) {
      alert("Please fill in all fields");
      return;
    }

    // Call the provided onListNFT callback
    try {
      await onListNFT(nftContract, tokenId, startingPrice, startTime, duration);
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
      <h2 className="text-center text-2xl font-semibold text-amber-500 mt-10">List Your NFT for Auction</h2>
      <div className="mt-5 bg-slate-600 rounded-lg p-10 shadow-2xl shadow-black">
        <div className="">
          <label className="text-white font-bold">NFT Contract Address:</label>
          <input
            className="ml-5 rounded-md p-2 mb-5 bg-black text-white"
            type="text"
            value={nftContract}
            onChange={e => setNFTContract(e.target.value)}
          />
        </div>
        <div className="">
          <label className="text-white font-bold">Token ID:</label>
          <input
            className="ml-5 rounded-md p-2 mb-5 bg-black text-white"
            type="number"
            value={tokenId}
            onChange={e => setTokenId(Number(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label className="text-white font-bold">Starting Price:</label>
          <input
            className="ml-5 rounded-md p-2 mb-5 bg-black text-white"
            type="number"
            value={startingPrice}
            onChange={e => setStartingPrice(Number(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label className="text-white font-bold">Start Time (Unix Timestamp):</label>
          <input
            className="ml-5 rounded-md p-2 mb-5 bg-black text-white"
            type="number"
            value={startTime}
            onChange={e => setStartTime(Number(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label className="text-white font-bold">Auction Duration (in seconds):</label>
          <input
            className="ml-5 rounded-md p-2 mb-5 bg-black text-white"
            type="number"
            value={duration}
            onChange={e => setDuration(Number(e.target.value))}
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-amber-500 rounded-md p-3 font-semibold hover:bg-slate-400" onClick={handleListNFT}>
            List NFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTListingForm;
