"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import UserIcon1 from "../../../../../public/user_icon1.png";

export default function Page() {
  useEffect(() => {
    const fetchData = async () => {
      console.log("通過")
      try {
        const url = "http://localhost:8080/article/view/10";
        const token = sessionStorage.getItem("token");
        console.log("token",token);
        if (token !== null) {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
            // body: JSON.stringify(data),
          });
          console.log(response);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          } else {
            const responseData = await response.json();
            console.log("responses",responseData['body']);
          }
        }
      } catch (e) {
        console.error("Error during fetch:", e);
      }
    };

    // fetchData 関数を呼び出す
    fetchData();
  }, []);
  

  const send = async () => {
    console.log("ke");
    try {
      const url = "http://localhost:8080/article/add";
      const token = sessionStorage.getItem("token");
      console.log(token);
      const data = {
        room_id: 4,
      };
      console.log(data);
      if (token !== null) {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: token,
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
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full mt-2 mb-5 flex justify-center items-center font-bold text-2xl text-sub-color">
        <div className="flex items-center mr-4">
          <p className="text-3xl">作成時間：</p>
          <select id="times" className="rounded-lg bg-transparent border-4 w-[150px] py-2 text-center">
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
        <button className="bg-sub-color w-[200px] border-4 border-sub-color text-main-color rounded-lg py-2">検索</button>
      </div>

      <div className="h-screen">
        <div className="w-full my-1 flex flex-wrap font-bold text-2xl">
          <div className="w-full h-36 p-4">
            <a href="./comparison">
              <div className="bg-sub-color h-full rounded-xl flex flex-wrap items-center justify-center">
                <div className="flex w-full text-center justify-center py-1 font-extrabold text-3xl">
                  お題:<span>已己巳己(いこみき)とは？</span>
                </div>
                <div className="flex items-center py-1">
                  <Image src={UserIcon1} alt="参加者アイコン" className="rounded-full mx-2" width={30} />
                  <p className="">ルーム製作者名</p>
                </div>
                <p className="font-extrabold mx-2">VS</p>
                <div className="flex items-center">
                  <Image src={UserIcon1} alt="参加者アイコン" className="rounded-full mx-2" width={30} />
                  <p className="">ルーム製作者名</p>
                </div>
                <p className="text-center mx-2">
                  作成時間:<span className="">90</span>分
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="w-full my-1 flex flex-wrap font-bold text-2xl">
          <div className="w-full h-36 p-4">
            <div className="bg-sub-color h-full rounded-xl flex flex-wrap items-center justify-center">
              <div className="flex w-full text-center justify-center py-1 font-extrabold text-3xl">
                お題:<span>已己巳己(いこみき)とは？</span>
              </div>
              <div className="flex items-center py-1">
                <Image src={UserIcon1} alt="参加者アイコン" className="rounded-full mx-2" width={30} />
                <p className="">ルーム製作者名</p>
              </div>
              <p className="font-extrabold mx-2">VS</p>
              <div className="flex items-center">
                <Image src={UserIcon1} alt="参加者アイコン" className="rounded-full mx-2" width={30} />
                <p className="">ルーム製作者名</p>
              </div>
              <p className="text-center mx-2">
                作成時間:<span className="">90</span>分
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
