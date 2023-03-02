import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import { db } from '../firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import {useRecoilState} from 'recoil'
import { rhunState } from '../recoil/RecoilState'

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
interface rhun {
  title : string
  ab : string
  id : string
  date : any
  point : string
}


const RhunDot = () => {
  const [rhunData, setRhunData] = useState([])

  const [recoilRhunContent, setRecoilRhunContent] = useRecoilState(rhunState)
  // firebase db 의 rhun 능력치 가져오기
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

  // recoil을 이용하여 클릭한 rhun 능력치를 추가
  const addRhunContext = (item : rhun) : void => {
    setRecoilRhunContent([...recoilRhunContent, item])

  }

  return (
    <RhunDotBox>
      {
        rhunData.map((item: any) => {
          return (
            <DotDiv key={item.id} >
              <input type='radio' onClick={()=>{addRhunContext(item)}} />
            </DotDiv>
          )

        })
      }
    </RhunDotBox>
  )
}

export default RhunDot