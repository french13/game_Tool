import React, {useEffect} from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const RhunDotBox = styled.div`
position : absolute;
width : 100%;
height : 100%;
top : 0;
border : solid 2px blue;
display : flex;
overflow : wrap;
`

const RhunDot = () => {

    const getRhunData = async()=>{
        const q = collection(db, 'illust');
        const rhunData = await getDocs(q)
        rhunData.forEach((doc)=>{
          console.log(doc.data())
        })
      }
    
    
      useEffect(()=>{
        getRhunData()
      }, [])
    
  return (
    <RhunDotBox>
        <div style={{width : '10%', border : 'solid 2px red'}}>1</div>
        <div style={{width : '10%', border : 'solid 2px red'}}>1</div>
        <div style={{width : '10%', border : 'solid 2px red'}}>1</div>
        <div style={{width : '10%', border : 'solid 2px red'}}>1</div>
        <div style={{width : '10%', border : 'solid 2px red'}}>1</div>
        <div style={{width : '10%', border : 'solid 2px red'}}>1</div>
        <div style={{width : '10%', border : 'solid 2px red'}}>1</div>
        <div style={{width : '10%', border : 'solid 2px red'}}>1</div>
        <div style={{width : '10%', border : 'solid 2px red'}}>1</div>
        <div style={{width : '10%', border : 'solid 2px red'}}>1</div>
        <div style={{width : '10%', border : 'solid 2px red'}}>1</div>
    </RhunDotBox>
  )
}

export default RhunDot