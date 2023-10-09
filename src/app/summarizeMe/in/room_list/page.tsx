"use client";

import Image from "next/image";
import UserIcon1 from "../../../../../public/user_icon1.png";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUser] = useState(false);
  const [limit_time, setLimit_time] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("通過");
      try {
        const room_url = "http://localhost:8080/room";
        const token = sessionStorage.getItem("token");
        if (token !== null) {
          const response_room = await fetch(room_url, {
            method: "GET",
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
            // body: JSON.stringify(data),
          });
          console.log(response_room);
          if (!response_room.ok) {
            throw new Error("Network response was not ok");
          } else {
            const response_roomData = await response_room.json();
            setUser(response_roomData[0]["name"])
            setLimit_time(response_roomData[0]["limit_time"]);
            // console.log("response_room", response_roomData);
            console.log("response_room", response_roomData[0]["name"]);
            console.log("response_room", response_roomData[0]["limit_time"]);
          }
        }
      } catch (e) {
        console.error("Error during fetch:", e);
      }
    };
    // fetchData 関数を呼び出す
    fetchData();
  }, []);
  
  const toggleModal = async () => {
    setIsOpen(!isOpen);
  };

  const send = async () => {
    console.log("open");
    try {
      const url = "http://localhost:8080/room/add";
      const token = sessionStorage.getItem("token");
      console.log(token);
      const data = {
        limit_time: 90,
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
    setIsOpen(isOpen);
  }

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

      {isOpen && (
        <div onClick={toggleModal} className="bg-slate-500/75 fixed w-full h-full top-0 left-0 flex min-h-screen justify-center items-center">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="rounded-lg bg-sub-color w-1/3 h-1/3 py-3 shadow-lg shadow-sub-color"
          >
            <div className="h-full flex flex-col justify-around items-center">
              <div className="flex justify-center items-center w-full px-3">
                <hr className="border-2 border-black w-2/6 mx-2" />
                <span className="text-center text-2xl font-extrabold w-2/6">ルーム作成</span>
                <hr className="border-2 border-black w-2/6 mx-2" />
              </div>

              <div className="flex w-full justify-center items-center">
                <span onChange={(event) => console.log(event.target)} className="font-bold text-2xl">
                  作成時間：
                </span>
                <select id="times" className="rounded-lg font-bold text-2xl bg-opacity-100 block w-1/3 h-2/3 pl-2.5 my-5 border-2 border-black">
                  <option className="font-bold" value="15">
                    15分
                  </option>
                  <option className="font-bold" value="30">
                    30分
                  </option>
                  <option className="font-bold" value="60">
                    60分
                  </option>
                </select>
              </div>

              <button onClick={send} className="w-2/6 rounded-lg font-bold bg-black text-sub-color text-center m-4  px-8 py-4">
                作成
              </button>

              <div className="w-full px-4">
                <hr className="border-2 border-black w-full" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex flex-wrap font-bold text-2xl">
        <div className="w-1/3 h-96 p-4">
          <div className="bg-sub-color h-full rounded-3xl flex flex-col items-center justify-center">
            <div className="flex items-center">
              <Image src={UserIcon1} alt="SummarizeMe logo" className="rounded-full mx-2" width={75} />
              <p className="">{userName}</p>
            </div>
            <p className="w-full text-3xl text-center my-10">
              制限時間:<span className="">{limit_time}</span>分
            </p>
            <button className="bg-black font-bold text-sub-color rounded-xl px-8 py-2 ">
              <Link href="./battle_room">参加</Link>
            </button>
          </div>
        </div>

        <div className="w-1/3 h-96 p-4">
          <div className="bg-sub-color h-full rounded-3xl flex flex-col items-center justify-center">
            <div className="flex items-center">
              <Image src={UserIcon1} alt="SummarizeMe logo" className="rounded-full mx-2" width={75} />
              <p className="">おざわ</p>
            </div>
            <p className="w-full text-3xl text-center my-10">
              制限時間:<span className="">90</span>分
            </p>
            <button className="bg-black font-bold text-sub-color rounded-xl px-8 py-2 ">
              <Link href="./battle_room">参加</Link>
            </button>
          </div>
        </div>

        <div className="w-1/3 h-96 p-4">
          <div className="bg-sub-color h-full rounded-3xl flex flex-col items-center justify-center">
            <div className="flex items-center">
              <Image src={UserIcon1} alt="SummarizeMe logo" className="rounded-full mx-2" width={75} />
              <p className="">くのり</p>
            </div>
            <p className="w-full text-3xl text-center my-10">
              制限時間:<span className="">90</span>分
            </p>
            <button className="bg-black font-bold text-sub-color rounded-xl px-8 py-2 ">
              <Link href="./battle_room">参加</Link>
            </button>
          </div>
        </div>

        <div className="w-1/3 h-96 p-4">
          <div className="bg-sub-color h-full rounded-3xl flex flex-col items-center justify-center">
            <div className="flex items-center">
              <Image src={UserIcon1} alt="SummarizeMe logo" className="rounded-full mx-2" width={75} />
              <p className="">金髪</p>
            </div>
            <p className="w-full text-3xl text-center my-10">
              制限時間:<span className="">90</span>分
            </p>
            <button className="bg-black font-bold text-sub-color rounded-xl px-8 py-2 ">
              <Link href="./battle_room">参加</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
