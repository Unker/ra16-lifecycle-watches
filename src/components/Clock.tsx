import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { ClockProps } from './types';

const Clock: React.FC<ClockProps> = ({ id, name, timezone, offset, onDelete }) => {
  const [time, setTime] = useState<string>(getCurrentTime());

  useEffect(() => {
    const intervalSecId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(intervalSecId)
    };
  }, []);

  function getCurrentTime() {
    const currentTime = moment().utcOffset(offset).format('HH:mm:ss');
    return `${name} (${timezone}): ${currentTime}`;
  }

  return (
    <div>
      <div>{time}</div>
      <button onClick={() => onDelete(id)}>Remove</button>
    </div>
  );
};

export default Clock;
