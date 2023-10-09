"use client";

import { SetStateAction, useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// markdown
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import Image from "next/image";
import icon from "../../../../../public/summarizeMe.png";
import goodWhite from "../../../../../public/good_white.png";
import goodBlack from "../../../../../public/good_black.png";
import "./comparison.css";

function TabPanel(props: { [x: string]: any; children: any; value: any; index: any }) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
            {/* typographyがpタグで<p><div></div></p>の形になりエラーになるので一時的に無理やりaタグ */}
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  useEffect(() => {
    const fetchData = async () => {
      console.log("通過");
      try {
        const url = "http://localhost:8080/article/view/1";
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
  const [markdown, setMarkdown] = useState<string | undefined>();
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <div className="flex w-full h-full">
      {/* tとりあえず高さを80vhに */}
      <div className="bg-white w-full mb-5 h-[80vh]">
        <div className="bg-main-color">
          <Box sx={{ borderBottom: 1, borderColor: "divider", color: "white", fontSize: "10px" }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="くり" {...a11yProps(0)} />
              <Tab label="まんじゅう" {...a11yProps(1)} />
            </Tabs>
          </Box>
        </div>
        <div className="bg-main-color text-white">
          {/* TODO:お題 */}
          <h1 className="p-3 text-white">お題：ちいかわ</h1>
          <div className="flex pb-3">
            <Image className="ml-5 rounded-full h-5 w-5" src={icon} alt="SummarizeMe" width={20} height={20} style={{ boxShadow: "0 0 10px 0px rgba(255, 255, 255, 0.5)" }} />
            <div className="text-[5px] flex items-center" style={{ marginLeft: "10px" }}>
              {/* TODO:参加者名、good数 */}
              クリ&thinsp;<span>23</span>&thinsp;like&nbsp;
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
        {/* <div className="h-full"> */}
          <TabPanel value={value} index={0}>
            <MDEditor
              value={markdown}
              height={"65vh"} // 仮
              preview="preview"
              hideToolbar={true}
              visibleDragbar={false}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <MDEditor
              value={"w"}
              // 時間ないのでとりあえずゴリ押し
              height={"65vh"} // 仮
              preview="preview"
              hideToolbar={true}
              visibleDragbar={false}
            />
          </TabPanel>
        {/* </div> */}
      </div>
    </div>
  );
}
