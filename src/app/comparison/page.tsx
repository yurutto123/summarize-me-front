"use client";

import React, { useState } from "react";
import Image from "next/image";
import icon from "../../../public/summarizeMe.png";
import goodWhite from "../../../public/good_white.png";
import goodBlack from "../../../public/good_black.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const comparison = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="bg-blue-700 w-1/4">左</div>

      <div className="bg-white w-1/2 mx-3">
        
        <Tabs>
          <TabList className="text-black ml-2">
            <Tab>くり</Tab>
            <Tab>まんじゅう</Tab>
          </TabList>
          <div className="bg-main-color mt-2">
            {/* TODO:お題 */}
            <h1 className="p-3">お題：</h1>
            <div className="flex pb-3">
              <Image className="ml-5 rounded-full h-5 w-5" src={icon} alt="SummarizeMe" width={20} height={20} style={{ boxShadow: "0 0 10px 0px rgba(255, 255, 255, 0.5)" }} />
              <div className="text-[5px] flex items-center" style={{ marginLeft: "10px" }}>
                {/* TODO:参加者名、good数 */}
                クリ&thinsp;<span>33</span>&thinsp;like&nbsp;
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-white p-1">
                  <Image className="h-3 w-3" src={goodWhite} alt="good" width={20} height={20} />
                </div>
                <span className="my-auto text-[5px]">&emsp;VS&emsp;</span>
              </div>
              <Image className="rounded-full h-5 w-5" src={icon} alt="SummarizeMe" width={20} height={20} style={{ boxShadow: "0 0 10px 0px rgba(255, 255, 255, 0.5)" }} />
              <div className="text-[5px] flex items-center" style={{ marginLeft: "10px" }}>
                {/* TODO:参加者名、good数 */}
                まんじゅう&thinsp;<span>33</span>&thinsp;like&nbsp;
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-white p-1">
                  <Image className="h-3 w-3" src={goodBlack} alt="good" width={20} height={20} />
                </div>
              </div>
              <div className="text-[5px] flex items-center pl-3">
                {/* TODO:作成時間 */}
                作成時間<span className="text-[10px]">：</span>90分
              </div>
            </div>
          </div>

          <TabPanel className="text-black">
            <h1>HOMEです</h1>
          </TabPanel>
          <TabPanel className="text-black">
            <h1>Aboutです</h1>
          </TabPanel>
        </Tabs>
      </div>
      <div className="bg-yellow-400 w-1/4">右</div>
    </div>
  );
};

export default comparison;
