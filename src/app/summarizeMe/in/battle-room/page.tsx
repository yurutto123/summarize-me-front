import Image from "next/image";
import React from "react";
import UserIcon1 from "../../../../../public/images/user_icon1.png";

export default function Page() {
  return (
    <div className="rounded-lg bg-sub-color w-full shadow-lg shadow-sub-color">
      <div className="text-center flex flex-col h-full">
        <div className="flex justify-center items-center w-full px-2 py-6">
          <hr className="border-4 border-origin-sky-blue w-1/3 mr-0.5" />
          <span className="text-4xl font-extrabold text-origin-sky-blue">
            バトルルーム
          </span>
          <hr className="border-4 border-origin-sky-blue w-1/3 mr-0.5" />
        </div>

        <div className="flex w-full justify-center items-center pt-6 pb-3">
          <div className="flex justify-center items-center">
            <Image
              src={UserIcon1}
              alt="SummarizeMe logo"
              className="w-16 shadow-sub-color shadow-lg z-10 rounded-full"
            />
            <p className="pl-4 text-4xl font-extrabold">参加者名</p>
          </div>
        </div>
        <div className="w-full py-6">
          <p className="text-4xl font-extrabold">VS</p>
        </div>

        <div className="flex w-full justify-center items-center -mt-2 pt-3 pb-6">
          <div className="flex justify-center items-center">
            <Image
              src={UserIcon1}
              alt="SummarizeMe logo"
              className="w-16 shadow-sub-color shadow-lg z-10 rounded-full"
            />
            <p className="pl-4 text-4xl font-extrabold">????????????</p>
          </div>
        </div>
        <div className="w-full pt-10 pb-2">
          <p className="text-3xl font-extrabold">
            残り作成時間
            <span>90分</span>
          </p>
        </div>
        <div className="w-full py-6">
          <button className="w-1/3 h-12 rounded-lg font-bold bg-origin-blue text-sub-color text-center px-3 py-2">
            記事を書く
          </button>
        </div>
        <div className="mx-24 flex">
          <hr className="border-4 border-origin-sky-blue w-full mt-3 mb-3" />
        </div>
      </div>
    </div>
  );
}
