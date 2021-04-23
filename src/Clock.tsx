import { Temporal } from 'proposal-temporal';
import React, { useState } from 'react';
import style from './Clock.css';

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(Temporal.now.instant());

  setTimeout(() => {
    setCurrentTime(Temporal.now.instant());
  }, 1000);

  return (
    <div className={style.clockFrame}>
      <div>{currentTime.toString()}</div>
    </div>
  );
}
