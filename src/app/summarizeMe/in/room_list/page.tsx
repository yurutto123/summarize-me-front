"use client";

import Image from "next/image";
import UserIcon1 from "../../../../../public/user_icon1.png";
import { useState } from "react";
import React from "react";
import Link from "next/link";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = async () => {
    console.log("open");
    try {
      const url = "http://localhost:8080/room/add";
      const token = sessionStorage.getItem("token");
      console.log(token)
      const data = {
        limit_time: 30,
      };
      console.log(data);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          // Authorization: JSON.stringify(token),
          // Authorization: "Bearer" + ":" + token,
          // Authorization: "Bearer " + token,
          Authorization: `Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjYsIm5hbWUiOiJhIiwiZW1haWwiOiJhQGEuYSIsImV4cCI6MTY5NjkyODYxM30.ztnFuaco3vH1ppN9SZ3rMD9HjhUEEqz3YIENYBE3SzE`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const responseData = await response.json();
        console.log(responseData);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div className="mx-auto my-2 flex justify-around items-center font-bold text-2xl text-sub-color">
        <div className="flex justify-center items-center m-1 w-full">
          <p className="text-3xl">作成時間：</p>
          <select id="times" className="rounded-lg bg-transparent border-4 w-[150px] m-2 py-2 text-center">
            <option className="bg-main-color font-bold" value="all">
              全て
            </option>
            <option className="bg-main-color font-bold" value="15">
              15分
            </option>
            <option className="bg-main-color font-bold" value="30">
              30分
            </option>
            <option className="bg-main-color font-bold" value="60">
              60分
            </option>
          </select>

          <button className="bg-sub-color w-[200px] border-4 border-sub-color text-main-color rounded-lg py-2 m-2 ">検索</button>

          <button onClick={toggleModal} className="bg-origin-blue w-[250px] border-4 border-origin-blue rounded-lg py-2 m-2 ">
            ルーム作成
          </button>
        </div>
      </div>

      {isOpen && <div onClick={toggleModal} className="bg-slate-500/75 fixed w-full h-full top-0 left-0"></div>}

      <div className="w-full flex flex-wrap font-bold text-2xl">
        <div className="w-1/3 h-96 p-4">
          <div className="bg-sub-color h-full rounded-3xl flex flex-col items-center justify-center">
            <div className="flex items-center">
              <Image src={UserIcon1} alt="SummarizeMe logo" className="rounded-full mx-2" width={75} />
              <p className="">ルーム製作者名</p>
            </div>
            <p className="w-full text-3xl text-center my-10">
              制限時間:<span className="">90</span>分
            </p>
            <button className="bg-black font-bold text-sub-color rounded-xl px-8 py-2 ">参加</button>
          </div>
        </div>

        <div className="w-1/3 h-96 p-4">
          <div className="bg-sub-color h-full rounded-3xl flex flex-col items-center justify-center">
            <div className="flex items-center">
              <Image src={UserIcon1} alt="SummarizeMe logo" className="rounded-full mx-2" width={75} />
              <p className="">ルーム製作者名</p>
            </div>
            <p className="w-full text-3xl text-center my-10">
              制限時間:<span className="">90</span>分
            </p>
            <button className="bg-black font-bold text-sub-color rounded-xl px-8 py-2 ">参加</button>
          </div>
        </div>

        <div className="w-1/3 h-96 p-4">
          <div className="bg-sub-color h-full rounded-3xl flex flex-col items-center justify-center">
            <div className="flex items-center">
              <Image src={UserIcon1} alt="SummarizeMe logo" className="rounded-full mx-2" width={75} />
              <p className="">ルーム製作者名</p>
            </div>
            <p className="w-full text-3xl text-center my-10">
              制限時間:<span className="">90</span>分
            </p>
            <button className="bg-black font-bold text-sub-color rounded-xl px-8 py-2 ">
              <Link href="../markdown">ss参加</Link>
            </button>
          </div>
        </div>

        <div className="w-1/3 h-96 p-4">
          <div className="bg-sub-color h-full rounded-3xl flex flex-col items-center justify-center">
            <div className="flex items-center">
              <Image src={UserIcon1} alt="SummarizeMe logo" className="rounded-full mx-2" width={75} />
              <p className="">ルーム製作者名</p>
            </div>
            <p className="w-full text-3xl text-center my-10">
              制限時間:<span className="">90</span>分
            </p>
            <button className="bg-black font-bold text-sub-color rounded-xl px-8 py-2 ">参加</button>
          </div>
        </div>
      </div>
    </div>
  );
}
