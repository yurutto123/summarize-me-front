"use client";

import { SetStateAction, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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
          <Typography>{children}</Typography>
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
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <div className="flex w-full h-full">
      <div className="bg-white w-full">
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
        <div className="bg-white">
          <TabPanel value={value} index={0}>
            くり記事
          </TabPanel>
          <TabPanel value={value} index={1}>
            まんじゅう記事
          </TabPanel>
        </div>
      </div>
    </div>
  );
}



// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import icon from "../../../public/summarizeMe.png";
// import goodWhite from "../../../public/good_white.png";
// import goodBlack from "../../../public/good_black.png";
// import a from "../../../public/a.png";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

// const comparison = () => {
//   return (
//     <div className="flex w-screen h-screen">
//       <div className="bg-blue-700 w-1/4">左</div>

//       <div className="bg-white w-1/2 mx-3">
//         <Tabs className="bg-main-color">
//           <TabList className="text-black ml-2">
//             <Tab>くり</Tab>
//             <Tab>まんじゅう</Tab>
//           </TabList>
//           <div className="bg-main-color mt-2">
//             {/* TODO:お題 */}
//             <h1 className="p-3">お題：</h1>
//             <div className="flex pb-3">
//               <Image className="ml-5 rounded-full h-5 w-5" src={icon} alt="SummarizeMe" width={20} height={20} style={{ boxShadow: "0 0 10px 0px rgba(255, 255, 255, 0.5)" }} />
//               <div className="text-[5px] flex items-center" style={{ marginLeft: "10px" }}>
//                 {/* TODO:参加者名、good数 */}
//                 クリ&thinsp;<span>33</span>&thinsp;like&nbsp;
//               </div>
//               <div className="flex items-center">
//                 <div className="rounded-full bg-white p-1">
//                   <Image className="h-3 w-3" src={goodWhite} alt="good" width={20} height={20} />
//                 </div>
//                 <span className="my-auto text-[5px]">&emsp;VS&emsp;</span>
//               </div>
//               <Image className="rounded-full h-5 w-5" src={icon} alt="SummarizeMe" width={20} height={20} style={{ boxShadow: "0 0 10px 0px rgba(255, 255, 255, 0.5)" }} />
//               <div className="text-[5px] flex items-center" style={{ marginLeft: "10px" }}>
//                 {/* TODO:参加者名、good数 */}
//                 まんじゅう&thinsp;<span>33</span>&thinsp;like&nbsp;
//               </div>
//               <div className="flex items-center">
//                 <div className="rounded-full bg-white p-1">
//                   <Image className="h-3 w-3" src={goodBlack} alt="good" width={20} height={20} />
//                 </div>
//               </div>
//               <div className="text-[5px] flex items-center pl-3">
//                 {/* TODO:作成時間 */}
//                 作成時間<span className="text-[10px]">：</span>90分
//               </div>
//             </div>
//           </div>

//           <TabPanel className="text-black">
//             <h1>DBから記事を取得</h1>
//           </TabPanel>
//           <TabPanel className="text-black">
//             <h1>DBから記事を取得だー</h1>
//           </TabPanel>
//         </Tabs>
//       </div>
//       <div className="bg-yellow-400 w-1/4">右</div>
//     </div>
//   );
// };

// export default comparison;
