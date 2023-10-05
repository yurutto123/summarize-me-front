import Image from "next/image";
import UserIcon1 from "../../../../../public/images/user_icon1.png";

export default function Page() {
    return (
        <div className="w-full">
            <div className="w-9/12 mx-auto my-2 flex justify-around items-center font-bold text-2xl text-sub-color">

                <div className="flex items-center">
                    <p className="text-3xl">作成時間：</p>
                    <select id="times" className="rounded-lg bg-transparent border-4 w-[150px] py-2 text-center">
                        <option className="font-bold" value="all">全て</option>
                        <option className="font-bold" value="15">15分</option>
                        <option className="font-bold" value="30">30分</option>
                        <option className="font-bold" value="60">60分</option>
                    </select>
                </div>

                <button className="bg-sub-color w-[200px] border-4 border-sub-color text-main-color rounded-lg py-2">
                    検索
                </button>

                <button className="bg-origin-blue w-[250px] border-4 border-origin-blue rounded-lg py-2">
                    ルーム作成
                </button>

            </div>

            <div className="w-full flex flex-wrap font-bold text-2xl">
                <div className="w-1/3 h-96 p-4">
                    <div className="bg-sub-color h-full rounded-3xl flex flex-col items-center justify-center">
                        <div className="flex items-center">
                            <Image
                                src={UserIcon1}
                                alt="SummarizeMe logo"
                                className="rounded-full mx-2"
                                width={75}
                            />
                            <p className="">ルーム製作者名</p>
                        </div>
                        <p className="w-full text-3xl text-center my-10">
                            制限時間:<span className="">90</span>分
                        </p>
                        <button
                            className="bg-black font-bold text-sub-color rounded-xl px-8 py-2 text-white"
                        >
                            参加
                        </button>
                    </div>
                </div>

                <div className="w-1/3 h-96 p-4">
                    <div className="bg-sub-color h-full rounded-3xl flex flex-col items-center justify-center">
                        <div className="flex items-center">
                            <Image
                                src={UserIcon1}
                                alt="SummarizeMe logo"
                                className="rounded-full mx-2"
                                width={75}
                            />
                            <p className="">ルーム製作者名</p>
                        </div>
                        <p className="w-full text-3xl text-center my-10">
                            制限時間:<span className="">90</span>分
                        </p>
                        <button
                            className="bg-black font-bold text-sub-color rounded-xl px-8 py-2 text-white"
                        >
                            参加
                        </button>
                    </div>
                </div>

                <div className="w-1/3 h-96 p-4">
                    <div className="bg-sub-color h-full rounded-3xl flex flex-col items-center justify-center">
                        <div className="flex items-center">
                            <Image
                                src={UserIcon1}
                                alt="SummarizeMe logo"
                                className="rounded-full mx-2"
                                width={75}
                            />
                            <p className="">ルーム製作者名</p>
                        </div>
                        <p className="w-full text-3xl text-center my-10">
                            制限時間:<span className="">90</span>分
                        </p>
                        <button
                            className="bg-black font-bold text-sub-color rounded-xl px-8 py-2 text-white"
                        >
                            参加
                        </button>
                    </div>
                </div>

                <div className="w-1/3 h-96 p-4">
                    <div className="bg-sub-color h-full rounded-3xl flex flex-col items-center justify-center">
                        <div className="flex items-center">
                            <Image
                                src={UserIcon1}
                                alt="SummarizeMe logo"
                                className="rounded-full mx-2"
                                width={75}
                            />
                            <p className="">ルーム製作者名</p>
                        </div>
                        <p className="w-full text-3xl text-center my-10">
                            制限時間:<span className="">90</span>分
                        </p>
                        <button
                            className="bg-black font-bold text-sub-color rounded-xl px-8 py-2 text-white"
                        >
                            参加
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}