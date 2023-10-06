import React from "react";

import Image from "next/image";
import icon from "../../../public/summarizeMe.png";

function articles_list() {
  return (
    <div className="flex w-screen h-screen">
      <div className="bg-blue-700 w-[25%] display: none">左</div>
      <div className="bg-main-color w-[50%] mx-3">
        <div className="bg-main-color mt-2 text-white">
          {/* TODO:お題 */}
          <h1 className="p-3 text-white">已己巳己(いこみき)とは？</h1>
          <div className="flex pb-3">
            <Image className="ml-5 rounded-full h-5 w-5" src={icon} alt="SummarizeMe" width={20} height={20} style={{ boxShadow: "0 0 10px 0px rgba(255, 255, 255, 0.5)" }} />
            <div className="text-[5px] flex items-center" style={{ marginLeft: "10px" }}>
              {/* TODO:参加者名、good数 */}
              クリ&thinsp;<span>33</span>&thinsp;like&nbsp;
            </div>
            <div className="text-[5px] flex-1 flex items-center justify-end px-3">
              {/* TODO:作成時間 */}
              作成時間<span className="text-[10px]">：</span>90分
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-700 w-[25%] display: none;">右</div>
    </div>
  );
}

export default articles_list