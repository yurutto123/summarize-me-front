import Image from "next/image";
import React from "react";
import UserIcon1 from "../../../../../public/images/user_icon1.png";

export default function Page() {
  return (
    <div className="w-full">
      <div className="w-full mt-2 mb-5 flex justify-center items-center font-bold text-2xl text-sub-color">
        <div className="flex items-center mr-4">
          <p className="text-3xl">作成時間：</p>
          <select
            id="times"
            className="rounded-lg bg-transparent border-4 w-[150px] py-2 text-center"
          >
            <option className="bg-main-color font-bold" value="all">
              全て
            </option>
            <option className="bg-main-color font-bold" value="15">
              15分
            </option>
            <option className="bg-main-color" value="30">
              30分
            </option>
            <option className="bg-main-color" value="60">
              60分
            </option>
          </select>
        </div>
        <button className="bg-sub-color w-[200px] border-4 border-sub-color text-main-color rounded-lg py-2">
          検索
        </button>
      </div>

      <div className="w-full my-1 flex flex-col font-bold text-2xl">
        <div className="w-full p-4">
          <div className="bg-sub-color h-full rounded-xl flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <div className="flex text-center justify-center py-1 font-extrabold text-3xl">
                お題:<span>已己巳己(いこみき)とは？</span>
              </div>
              <p className="text-center mx-2">
                作成時間:<span className="">90</span>分
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col text-lose-color p-2">
                <div className="flex items-center pb-3">
                  <Image
                    src={UserIcon1}
                    alt="参加者アイコン"
                    className="rounded-full mx-2"
                    width={30}
                  />
                  <p className="">ルーム製作者名</p>
                  <p className="px-2">20like</p>
                  <p className="">lose</p>
                </div>
                <div className="flex items-center justify-center">
                  <button className="bg-lose-color rounded-lg w-40 text-sub-color">
                    記事を見る
                  </button>
                </div>
              </div>
              <p className="font-extrabold mx-2">VS</p>
              <div className="flex flex-col text-win-color p-2">
                <div className="flex items-center pb-3">
                  <Image
                    src={UserIcon1}
                    alt="参加者アイコン"
                    className="rounded-full mx-2"
                    width={30}
                  />
                  <p className="">ルーム製作者名</p>
                  <p className="px-2">33like</p>
                  <p className="">win</p>
                </div>
                <div className="flex items-center justify-center">
                  <button className="bg-win-color rounded-lg w-40 text-sub-color">
                    記事を見る
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="bg-sub-color h-full rounded-xl flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <div className="flex text-center justify-center py-1 font-extrabold text-3xl">
                お題:<span>已己巳己(いこみき)とは？</span>
              </div>
              <p className="text-center mx-2">
                作成時間:<span className="">90</span>分
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col text-lose-color p-2">
                <div className="flex items-center pb-3">
                  <Image
                    src={UserIcon1}
                    alt="参加者アイコン"
                    className="rounded-full mx-2"
                    width={30}
                  />
                  <p className="">ルーム製作者名</p>
                  <p className="px-2">20like</p>
                  <p className="">lose</p>
                </div>
                <div className="flex items-center justify-center">
                  <button className="bg-lose-color rounded-lg w-40 text-sub-color">
                    記事を見る
                  </button>
                </div>
              </div>
              <p className="font-extrabold mx-2">VS</p>
              <div className="flex flex-col text-win-color p-2">
                <div className="flex items-center pb-3">
                  <Image
                    src={UserIcon1}
                    alt="参加者アイコン"
                    className="rounded-full mx-2"
                    width={30}
                  />
                  <p className="">ルーム製作者名</p>
                  <p className="px-2">33like</p>
                  <p className="">win</p>
                </div>
                <div className="flex items-center justify-center">
                  <button className="bg-win-color rounded-lg w-40 text-sub-color">
                    記事を見る
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
