"use client";

import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import "../../markdown/markdown.css"

import Image from "next/image";
import icon from "../../../../../public/summarizeMe.png";

function ArticlesList() {
  let [markdown, setMarkdown] = useState<string | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      console.log("通過");
      try {
        const url = "http://localhost:8080/article/view/5";
        const token = sessionStorage.getItem("token");
        console.log("token", token);
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
            setMarkdown(responseData["body"]);
            console.log("responses", responseData["body"]);
          }
        }
      } catch (e) {
        console.error("Error during fetch:", e);
      }
    };
    // fetchData 関数を呼び出す
    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="bg-main-color text-white">
        {/* TODO:お題 */}
        <h1 className="p-3 text-white text-2xl">オンデマンド</h1>
        <div className="flex pb-3">
          <Image className="ml-5 rounded-full h-5 w-5" src={icon} alt="SummarizeMe" width={20} height={20} style={{ boxShadow: "0 0 10px 0px rgba(255, 255, 255, 0.5)" }} />
          <div className="text-lg flex items-center" style={{ marginLeft: "10px" }}>
            {/* TODO:参加者名、good数 */}
            クリ&thinsp;<span>33</span>&thinsp;like&nbsp;
          </div>
          <div className="text-[5px] flex-1 flex items-center justify-end px-3">
            {/* TODO:作成時間 */}
            作成時間<span className="text-[10px]">：</span>90分
          </div>
        </div>
      </div>
      <MDEditor
        value={markdown}
        height={"100%"} // 仮
        preview="preview"
        hideToolbar={true}
      />
    </div>
  );
}

export default ArticlesList;
