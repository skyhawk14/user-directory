import React, { useEffect, useState } from 'react';
import './TypeAheadDropDown.css'

const TypeAheadDropDown = ({items, changeHandler, label}) => {
  const [dropDownState, setDropDownState] = useState({
    suggestions: [],
    text: ''
  })

  const onTextChange = (e) => {
    let suggestions = [];
    const value = e.target.value.toLowerCase();
    if (value.length > 0) {
      suggestions = items.sort().filter(v => v.toLowerCase().includes(value));
    }
    setDropDownState(() => ({
      suggestions,
      text: value
    }))
    changeHandler(value)
  }
  
  const suggestionSelected=(value)=>{
    setDropDownState(()=>({
      text: value,
      suggestions: []
    }))
    changeHandler(value)
  }

  useEffect(()=>{
    if(items?.length>0){
      suggestionSelected(items[0])
    }
  }, [items])
  
  const renderSuggestions = () => {
    const { suggestions } = dropDownState
    if (suggestions.length !== 0) {
      return (
        <ul className='suggestion-container'>
          {suggestions.map(item => (
            <li
              key={item}
              onClick={(e)=>suggestionSelected(item)}
            >
              {item}
            </li>
          ))
          }
        </ul>
      )
    }
  }
    
  return (
    <div
      className="TypeAheadDropDown"
    >
      <input
        onChange={onTextChange}
        placeholder={label}
        value={dropDownState.text}
        type="text" 
      />
      {renderSuggestions()}
    </div>
  )
}
export default TypeAheadDropDown