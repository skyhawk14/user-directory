import React, {useState, useEffect} from 'react'
import TypeAheadDropDown from '@/src/shared/TypeAheadDropDown/TypeAheadDropDown'
import DisplayTime from '@/src/user/components/DisplayTime'
import { useFetch } from '@/src/shared/hooks/useFetch'
import { API } from '@/src/user/constants'
import { NOT_FOUND_CODE } from '../constants'
import Button from '../../shared/Button/Button'
import './UserPageTopBar.css'
import { useNavigate } from 'react-router-dom'

const UserPageTopBar = () => {
  const [country, setCountry] = useState('')
  const [dateTime, setDateTime] = useState('')
  const { responseData } = useFetch(API.COUNTRIES)
  const navigate = useNavigate()

  useEffect(()=>{
    async function fetchCountry(){
      if(country != ''){
        try {
          const response = await fetch(`${API.COUNTRIES}/${country}`)
          if (response.status === NOT_FOUND_CODE) {
            setDateTime(null)
            return
          }
          const data = await response.json()
          setDateTime(new Date(`${data.utc_datetime.split('.')[0]}Z`))
        } catch(err){
          console.log('Error while fetching time')
        }
      } else {
        setDateTime(null)
      }
    }
    fetchCountry()
  }, [country])

  return (
    <div className='page-top-container'>
      <div>
        <Button clickHandler={()=>navigate('/')}>
          Back
        </Button>
      </div>
      <div className='right-container'>
        <TypeAheadDropDown
          label='Search Country'
          changeHandler= { setCountry }
          items = { responseData }
          className="search-bar"
        />
        <div style={{width: '400px'}}>
          {dateTime && <DisplayTime
            dateTime = {dateTime}
          />}
        </div>
      </div>
    </div>
  )
}
    
export default UserPageTopBar