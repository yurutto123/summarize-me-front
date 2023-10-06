"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import "./markdown.css";
import Timer from "../timer/page";

const markdown = () => {
  const send = async () => {
    try {
      const url = "http://localhost:8080/login";
      const data = {
        name: "test1",
        email: "test1@email.com",
        password: "test1",
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      // tokenをセッションに保存
      sessionStorage.setItem("token",String(responseData));
      console.log("Response:", responseData);
      
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [markdown, setMarkdown] = useState<string | undefined>();

  return (
    <div data-color-mode="light" className="bg-main-color h-[100%]">
      <div className="h-[8%] text-white flex">
        {/* TODO: DBからお題と時間を持ってくる */}
        <h1 className="h-full pl-2 text-lg flex items-center">お題：ちいかわ</h1>
        <p className="h-full pr-1 text-sm text-white flex-1 flex items-center justify-end">残り作成時間：&nbsp;</p>
        {/* タイマー */}
        <div className="flex justify-center items-center">
          <Timer initialCount={90} />
        </div>
        <button className="text-white bg-button-color px-5 m-4 rounded flex items-center" onClick={send}>
          完了
        </button>
      </div>
      <MDEditor
        value={markdown}
        onChange={(value) => {
          setMarkdown(value);
        }}
        // commands={[
        // ]}
        // components={{
        //   toolbar: (command, disabled, executeCommand) => {
        //     if (command.keyCommand === "code") {
        //       return (
        //         <button
        //           aria-label="Insert code"
        //           disabled={disabled}
        //           onClick={(evn) => {
        //             evn.stopPropagation();
        //             executeCommand(command, command.groupName);
        //           }}
        //         >
        //           Code
        //         </button>
        //       );
        //     }
        //   },
        // }}
        // style={
        //   {
        //     ".w-md-editor-editor-toolbar": {
        //       background: "green",
        //     },
        //   } as React.CSSProperties
        // }
        height={"100%"} // 仮
        textareaProps={{
          placeholder: "テキスト",
        }}
      />
    </div>
  );
};

export default markdown;
