import { useState } from "react";
import { Button } from "antd";

let timeRun;

const Interval = (props) => {
  const [time, setTime] = useState(0);
  const [intervalStart, setIntervalStart] = useState(false);

  const handleStart = () => {
    if (intervalStart) return;

    setIntervalStart(true);

    timeRun = setInterval(() => {
      setTime((n) => {
        return n + 1;
      });
    }, 1000);
  }

  const handlePause = () => {
    setIntervalStart(false);

    clearInterval(timeRun);
  }

  const handleStop = () => {
    setIntervalStart(false);
    setTime(0);

    clearInterval(timeRun);
  }

  return (
    <div>
      <Button onClick={handleStart}>开始</Button>
      <Button onClick={handlePause}>暂停</Button>
      <Button onClick={handleStop}>停止</Button>
      <div>用时：{time}s</div>
    </div>
  );
}

export default Interval;