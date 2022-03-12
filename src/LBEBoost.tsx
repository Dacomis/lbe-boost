import React, { useState } from "react";
import getBoosterRate from "./NftBooster";
import { BsSearch } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";

export function LBEBoost() {
  const [assetName, setAssetName] = useState("");
  const [boost, setBoost] = useState(0);

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    setBoost(getBoosterRate(assetName));
  };
  return (
    <div className="text-gray-200 grid place-content-center">
      <span className="mx-10 mt-20 text-3xl text-center">
        Find your extra boost from the
      </span>
      <span className="mx-10 mb-16 mt-2 text-4xl text-center text-indigo-700">
        Minswap Liquidity Bootstrapping Event NFT
      </span>

      <form
        onSubmit={handleSubmit}
        className="relative border-indigo-100 bg-indigo-900 rounded-lg p-4 my-2 mx-auto flex justify-center w-10/12"
      >
        <BsSearch className="absolute bottom-7 left-7" />
        <input
          className="border-indigo-400 border-x border-y rounded-lg bg-indigo-900 flex-grow pl-9 p-2 text-sm
                      focus:outline-none focus:border-indigo-500 shadow-xl truncate overflow-clip"
          type="text"
          value={assetName}
          placeholder="Asset Name"
          onChange={(e) => setAssetName(e.target.value)}
        />
        <button
          className="bg-indigo-500 w-24 rounded-lg ml-5 border-indigo-300 shadow-2xl disabled:opacity-50"
          disabled={assetName.length !== 32}
          type="submit"
        >
          Calculate
        </button>
      </form>

      <div>
        {assetName.length > 32 && (
          <div className="text-red-500 flex relative items-center w-10/12 mx-24">
            <BsExclamationCircle />
            <span className="text-sm ml-1">
              The asset name has over 32 characters
            </span>
          </div>
        )}
      </div>
      <div>
        {assetName.length > 0 && assetName.length < 32 && (
          <div className="text-red-500 flex relative items-center w-10/12 mx-24">
            <BsExclamationCircle />
            <span className="text-sm ml-1">
              The asset name has under 32 characters
            </span>
          </div>
        )}
      </div>

      <div>
        {Boolean(boost) && (
          <div className="mx-10 mt-12 text-2xl text-center flex flex-col">
            <span>The Minswap Meteor Liquidity Bootstrapping Event NFT</span>
            <span>gives you an extra boost of</span>
            <span className="mx-10 mb-12 mt-2 text-5xl text-center text-indigo-700">
              {" "}
              {boost}%
            </span>
          </div>
        )}
      </div>
      <div className="mx-10 mt-4 text-gray-200 text-2xl text-center flex">
        <span>
          You don't know your
          <span className="text-indigo-700"> Asset Name? </span>
          Follow the 4th and 5th step on this
          <a
            className="text-indigo-700 hover:text-indigo-800"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/theDacomis/status/1502369506349527046?s=20&t=DFOxVvECeXEL_IbcGgC_Pg"
          >
            {" Twitter thread"}
          </a>
        </span>
      </div>
    </div>
  );
}
