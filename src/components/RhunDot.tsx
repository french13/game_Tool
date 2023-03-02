import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import { db } from '../firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

const RhunDotBox = styled.div`
position : absolute;
width : 100%;
height : 100%;
top : 0;
display : flex;
flex-wrap : wrap;
`
const DotDiv = styled.div`
height : 16%;
width : 10%;
display : flex;
justify-content : center;
align-items : end;
`



const RhunDot = () => {
  const [rhunData, setRhunData] = useState([])

  const getRhunData = async () => {
    let box: any = []
    const data = collection(db, 'illust');
    const q = query(data, orderBy('date'))
    const rhunData = await getDocs(q)
    rhunData.forEach((doc) => {
      box.push(doc.data())
      console.log(doc.data())
    })
    setRhunData(box)
  }


  useEffect(() => {
    getRhunData()
  }, [])

  return (
    <RhunDotBox>
      {
        rhunData.map((item: any) => {
          return (
            <DotDiv key={item.id} >
              <input type='radio' />
            </DotDiv>
          )

        })
      }
    </RhunDotBox>
  )
}

export default RhunDot