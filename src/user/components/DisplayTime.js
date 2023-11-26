import React, { useEffect, useState } from 'react'
import { useTimer } from '@/src/shared/hooks/useTimer'
import Button from '../../shared/Button/Button'

const DisplayTime = ({ dateTime }) => {
  const {time, startPause} = useTimer(dateTime)
  return (
    <div 
      style={{
        display: 'flex',
        marginLeft: '20px',
        alignItems: 'center'
      }}
    >
    {
      dateTime ? (
        <span
          style={{
            width: '150px',
            fontSize: '18px',
            fontWeight: 700
          }}
        >
          {time}
        </span>
        ) : null
      }
      <Button 
        clickHandler={startPause}
      >
        Pause/Start
      </Button>
    </div>
  )
}
export default DisplayTime