import React, { useEffect, useState, useRef } from 'react'

function getTimeValue(day){
  // const locale = 'en';
  // return day.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' })
  debugger
  return day.toLocaleTimeString()
  // return day.toLocaleString().split(',')[1].trim()
}

export const useTimer = (date) => {
  const [isRunning, setIsRunning] = useState(true)
  const [today, setDate] = useState(date);
  const [time, setTime] = useState(getTimeValue(today))

  const dateTime = useRef(date)
  
  useEffect(() => {
      const timer = setInterval(() => { 
      if(isRunning) { 
        const oldDateTime = dateTime.current
        oldDateTime.setSeconds(oldDateTime.getSeconds()+1)
        dateTime.current = oldDateTime
        setDate(oldDateTime) 
        setTime(getTimeValue(today))
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