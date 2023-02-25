import React, { useState } from 'react'
import styled from 'styled-components'

const MenuItem = styled.div`
height : 100%;
font-size : 25px;
color : white;
overflow : hidden;
`

const UnderLine = styled.div<{ translateX: string }>`
width : 100%;
border-top : solid 3px white;
margin-top : 5px;
transform : translateX(${props=> props.translateX});
transition : all 0.2s;
`

interface item {
  id: number;
  title: string;
  link: string;
}

const MenuItems = (item: item) => {
 const [translateX, setTranslateX] = useState('-101%')

 const underLineIn = ()=>{
  setTranslateX('0%')
 }
 const underLineOut = ()=>{
  setTranslateX('-101%')
 }

  return (
    <MenuItem onMouseOver={underLineIn} onMouseOut={underLineOut} className='centerColumn'>
      {item.title}
      <UnderLine translateX={translateX} />
    </MenuItem>
  )
}

export default MenuItems