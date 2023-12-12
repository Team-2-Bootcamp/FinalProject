import { useState } from "react";
import type { NextPage } from "next";

const Ongoing: NextPage = () => {
  return (
    <>
      <p className="text-center text-4xl text-black mt-16">Ongoing Auctions Page</p>
      <p className="text-center mt-10 font-bold text-amber-400 text-2xl">Ongoing Auctions</p>
      <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item bg-white rounded-md">
          <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box w-1/2" />
          <div className="flex flex-col justify-center items-center p-4">
            <p className="w-full font-bold">
              Started at: <span className="text-amber-400 font-semibold">08:42</span>
            </p>
            <p className="w-full font-bold">
              Ends at: <span className="text-amber-400 font-semibold">10:42</span>{" "}
            </p>
            <p className="w-full font-bold">
              Top Bidder Address: <span className="text-amber-400 font-semibold">0xe34....0987</span>{" "}
            </p>
            <p className="w-full font-bold">
              Bid Amount: <span className="text-amber-400 font-semibold">127 AuA</span>
            </p>
            <button className="btn mt-4 w-32 bg-amber-500">Place Bid</button>
          </div>
        </div>
        <div className="carousel-item bg-white rounded-md">
          <img
            src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            className="rounded-box w-1/2"
          />
          <div className="flex flex-col justify-center items-center p-4">
            <p className="w-full font-bold">
              Started at: <span className="text-amber-400 font-semibold">08:42</span>
            </p>
            <p className="w-full font-bold">
              Ends at: <span className="text-amber-400 font-semibold">10:42</span>{" "}
            </p>
            <p className="w-full font-bold">
              Top Bidder Address: <span className="text-amber-400 font-semibold">0xe34....0987</span>{" "}
            </p>
            <p className="w-full font-bold">
              Bid Amount: <span className="text-amber-400 font-semibold">127 AuA</span>
            </p>
            <button className="btn mt-4 w-32 bg-amber-500">Place Bid</button>
          </div>
        </div>
        <div className="carousel-item bg-white rounded-md">
          <img
            src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            className="rounded-box w-1/2"
          />
          <div className="flex flex-col justify-center items-center p-4">
            <p className="w-full font-bold">
              Started at: <span className="text-amber-400 font-semibold">08:42</span>
            </p>
            <p className="w-full font-bold">
              Ends at: <span className="text-amber-400 font-semibold">10:42</span>{" "}
            </p>
            <p className="w-full font-bold">
              Top Bidder Address: <span className="text-amber-400 font-semibold">0xe34....0987</span>{" "}
            </p>
            <p className="w-full font-bold">
              Bid Amount: <span className="text-amber-400 font-semibold">127 AuA</span>
            </p>
            <button className="btn mt-4 w-32 bg-amber-500">Place Bid</button>
          </div>
        </div>
        <div className="carousel-item bg-white rounded-md">
          <img
            src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            className="rounded-box w-1/2"
          />
          <div className="flex flex-col justify-center items-center p-4">
            <p className="w-full font-bold">
              Started at: <span className="text-amber-400 font-semibold">08:42</span>
            </p>
            <p className="w-full font-bold">
              Ends at: <span className="text-amber-400 font-semibold">10:42</span>{" "}
            </p>
            <p className="w-full font-bold">
              Top Bidder Address: <span className="text-amber-400 font-semibold">0xe34....0987</span>{" "}
            </p>
            <p className="w-full font-bold">
              Bid Amount: <span className="text-amber-400 font-semibold">127 AuA</span>
            </p>
            <button className="btn mt-4 w-32 bg-amber-500">Place Bid</button>
          </div>
        </div>
        <div className="carousel-item bg-white rounded-md">
          <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box w-1/2" />
          <div className="flex flex-col justify-center items-center p-4">
            <p className="w-full font-bold">
              Started at: <span className="text-amber-400 font-semibold">08:42</span>
            </p>
            <p className="w-full font-bold">
              Ends at: <span className="text-amber-400 font-semibold">10:42</span>{" "}
            </p>
            <p className="w-full font-bold">
              Top Bidder Address: <span className="text-amber-400 font-semibold">0xe34....0987</span>{" "}
            </p>
            <p className="w-full font-bold">
              Bid Amount: <span className="text-amber-400 font-semibold">127 AuA</span>
            </p>
            <button className="btn mt-4 w-32 bg-amber-500">Place Bid</button>
          </div>
        </div>
        <div className="carousel-item bg-white rounded-md">
          <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box w-1/2" />
          <div className="flex flex-col justify-center items-center p-4">
            <p className="w-full font-bold">
              Started at: <span className="text-amber-400 font-semibold">08:42</span>
            </p>
            <p className="w-full font-bold">
              Ends at: <span className="text-amber-400 font-semibold">10:42</span>{" "}
            </p>
            <p className="w-full font-bold">
              Top Bidder Address: <span className="text-amber-400 font-semibold">0xe34....0987</span>{" "}
            </p>
            <p className="w-full font-bold">
              Bid Amount: <span className="text-amber-400 font-semibold">127 AuA</span>
            </p>
            <button className="btn mt-4 w-32 bg-amber-500">Place Bid</button>
          </div>
        </div>
        <div className="carousel-item bg-white rounded-md">
          <img
            src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            className="rounded-box w-1/2"
          />
          <div className="flex flex-col justify-center items-center p-4">
            <p className="w-full font-bold">
              Started at: <span className="text-amber-400 font-semibold">08:42</span>
            </p>
            <p className="w-full font-bold">
              Ends at: <span className="text-amber-400 font-semibold">10:42</span>{" "}
            </p>
            <p className="w-full font-bold">
              Top Bidder Address: <span className="text-amber-400 font-semibold">0xe34....0987</span>{" "}
            </p>
            <p className="w-full font-bold">
              Bid Amount: <span className="text-amber-400 font-semibold">127 AuA</span>
            </p>
            <button className="btn mt-4 w-32 bg-amber-500">Place Bid</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ongoing;
