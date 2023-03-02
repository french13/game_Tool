import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ContainerImg, ContentBox } from '../style/styledComponents'
import { Center, FirstColor } from '../style/Styled'
import { Col, Row } from 'antd'
import RhunDot from '../components/RhunDot'
import RhunAb from '../components/RhunAb'
import { useRecoilValue } from 'recoil'
import { rhunState } from '../recoil/RecoilState'


const RhunContainer = styled.div`
${Center}
width : 100%;
height : 100%;
`

const RhunContentBox = styled.div`
width : 70%;
`
const RhunImg = styled.img`
border : solid 2px ${FirstColor};
border-radius : 5px;
`

interface rhun {
  title: string
  ab: string
  id: string
  date: any
  point: string
}

const Rhun = () => {
  const recoilRhunPoint = useRecoilValue(rhunState)

  const [point, setPoint] = useState<number>(0)

  useEffect(() => {
    const pointArray = [...recoilRhunPoint].map((item) => {
      return Number(item.point)
    })

    const sumPoint = pointArray.reduce((a, b) => {
      return a + b
    }, 0)

    setPoint(sumPoint)
  }, [recoilRhunPoint])

  return (
    <>
      <ContainerImg src="/image/rhunBg.png" alt="mainPageBg" />
      <ContentBox>
        <RhunContainer>
          <RhunContentBox>
            <Row>
              <Col xs={24} md={11} style={{}}>
                <RhunImg src='/image/rhun.png' width='100%' height='100%' />
                <RhunDot />
              </Col>
              <Col xs={24} md={2}>{point}</Col>
              <Col xs={24} md={11}>
                <RhunAb />
              </Col>
            </Row>
          </RhunContentBox>

        </RhunContainer>


      </ContentBox>
    </>
  )
}

export default Rhun