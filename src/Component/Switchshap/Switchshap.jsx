import { Switch } from '@mui/material'
import React, { useState } from 'react'
import Text from '../Text/Text';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Switchshap() {

  const [checked, setChecked] = useState(false);
  let [Height, setHright] = useState(50)

  const handleChange = (event) => {
    setChecked(event.target.checked);
    
    setHright(Height===50?300:50)
  };


  
  return (
    <>
    <Switch {...label} 
    checked={checked}
    onChange={handleChange}
    
    />

    <Text Height={Height}></Text>
    



      
    </>
  )
}
