import React, { useEffect, useState, useRef } from 'react'

function getTimeValue(day, timeZone){
  const formattedDate = day.toLocaleString('default', {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone
  })
  return formattedDate
}

export const useTimer = (date, timeZone) => {
  const [isRunning, setIsRunning] = useState(true)
  const [today, setDate] = useState(date);
  const [time, setTime] = useState(getTimeValue(today, timeZone))

  const dateTime = useRef(date)
  
  useEffect(() => {
      const timer = setInterval(() => { 
      if(isRunning) { 
        const oldDateTime = dateTime.current
        oldDateTime.setSeconds(oldDateTime.getSeconds()+1)
        dateTime.current = oldDateTime
        setDate(oldDateTime) 
        setTime(getTimeValue(today, timeZone))
      }
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [isRunning]);

  const startPause = function(){
    setIsRunning(v=>!v)
  }

  return {
    time,
    startPause
  };
}