"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const markdown = () => {
  
function send(value) {
  alert(value);
  console.log(value);
}

  const [markdown, setMarkdown] = useState<string | undefined>();

  return (
    <div data-color-mode="light" className="bg-blue-700 h-[100%]">
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
        height={"50%"} // 仮
        textareaProps={{
          placeholder: "テキスト",
        }}
      />
      <button className="bg-blue-400 text-white py-2 px-4 rounded" onClick={()=> send(markdown)}>
        送信
      </button>
    </div>
  );
};

export default markdown;
