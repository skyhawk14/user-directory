import React, { useEffect, useState } from 'react'
import useFetch from '../../shared/hooks/useFetch'
import { USER_DETAILS } from '../constants'

const User = () => {
  const { loading, responseData, error } = useFetch(USER_DETAILS)
  return (
    <div>
      {loading ||loading == null ? <>Loading</> : (
        <>
          {
            responseData.map((user)=>(
                <div key={user.id}>{ user.name }</div>
              )
            )
          }
        </>
      )}
      {
        Boolean(error) && <>Error while fetching data</>
      }
    </div>
  )
}
  
export default User