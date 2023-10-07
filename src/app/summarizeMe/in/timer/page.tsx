import React, { useState, useEffect } from "react";

type Props = {
  initialCount: number;
};

//  HH:mm:ssの形に変換
const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const second = seconds % 60;

  const formatHour = String(hours).padStart(2, "0");
  const formatMinute = String(minutes).padStart(2, "0");
  const formatSecond = String(second).padStart(2, "0");

  return `${formatHour}:${formatMinute}:${formatSecond}`;
};

const Timer = ({ initialCount }: Props) => {
  let timerCounter: string | number | null;
  if (sessionStorage.getItem("timerIsRunning")) {
    timerCounter = sessionStorage.getItem("timerCount");
  } else {
    timerCounter = initialCount * 60;
  }
  console.log(timerCounter)
  // null の場合も考慮して文字列に変換
  const [count, setCount] = useState<number>(parseInt(String(timerCounter), 10));
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // タイマーの状態と残り時間をセッションストレージに保存
    sessionStorage.setItem("timerIsRunning", String(isRunning));
    sessionStorage.setItem("timerCount", String(count));
  }, [isRunning, count]);

  useEffect(() => {
    const savedIsRunning = sessionStorage.getItem("timerIsRunning");

    // 初回レンダリング時にのみ start 関数を呼び出す
    if (savedIsRunning === "true" && !isRunning) {
      // リロード前の残り時間を取得
      const savedCount = sessionStorage.getItem("timerCount");
      if (savedCount) {
        // null の場合も考慮して文字列に変換
        setCount(parseInt(String(savedCount), 10));
      }
    } else {
      console.log("do");
      setIsRunning(true);
    }

    // コンポーネントがアンマウントされたときにセッションストレージからクリア
    return () => {
      sessionStorage.removeItem("timerIsRunning");
      sessionStorage.removeItem("timerCount");
    };
  }, []);

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;

    if (isRunning && count > 0) {
      timerId = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    }

    // これがないとバグる
    return () => {
      // 停止
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [isRunning, count]);

  return (
    <div>
      <div>{formatTime(count)}</div>
    </div>
  );
};

export default Timer;
