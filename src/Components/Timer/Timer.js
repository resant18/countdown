import React from 'react';
import { Container } from './TimerStyles';

const Timer = ({ minutes, seconds, className }) => {
  const formatMinutes = (minutes, digit) => {
    if (digit === 2) return minutes < 10 ? '0' + minutes : minutes;
    else return minutes;
  };

  const formatSeconds = (seconds, digit) => {
    if (digit === 2) return seconds < 10 ? '0' + seconds : seconds;
    else return seconds;
  };
  
  return (
    <Container className={className}>
      {formatMinutes(minutes, 2)} : {formatSeconds(seconds, 2)}
    </Container>
  );
};

export default Timer;
