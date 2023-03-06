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
const PointBar = styled.div`
position : relative;
border : solid 2px ${FirstColor};
width : 100%;
height : 100%;
border-radius : 5px;
overflow : hidden;
`
const Bar = styled.div<{ translateY: string }>`
  width : 100%;
  height : 100%;
  border-radius : 3px;
  background-color : blue;
  transform : translateY(${props => props.translateY});
  transition : all 0.3s;
`
const PointStandard = styled.div`
position : absolute;
width : 100%;
height : 50%;
bottom : 0;
z-index : 1;
text-align : center;
color : white;
`
const Point = styled.div`
position : absolute;
top : 0;
width : 100%;
text-align : center;
color : white;
z-index : 1;
`
const Rhun = () => {
  const recoilRhunPoint = useRecoilValue(rhunState)

  const [point, setPoint] = useState<number>(0)

  const [translateY, setTranslateY] = useState('100%')

  const BarPoint = 100 - (point / 710 * 100)

  useEffect(() => {
    const pointArray = [...recoilRhunPoint].map((item) => {
      return Number(item.point)
    })
    const sumPoint = pointArray.reduce((a, b) => {
      return a + b
    }, 0)
    setPoint(sumPoint)
    setTranslateY(`${BarPoint}%`)
  }, [recoilRhunPoint, point])

  return (
    <>
      <ContainerImg src="/image/rhunBg.png" alt="mainPageBg" />
      <ContentBox>
        <RhunContainer>
          <RhunContentBox>
            <Row>
              <Col xs={24} md={11}>
                <RhunImg src='/image/rhun.png' width='100%' height='100%' />
                <RhunDot />
              </Col>
              <Col xs={24} md={2} style={{ padding: '0px 10px' }}>
                <PointBar>
                  <Point>
                    {point}
                  </Point>
                  <PointStandard>
                    <div style={{ height: '40%' }}>50%</div>
                    <div>30%</div>
                  </PointStandard>
                  <Bar translateY={translateY}></Bar>
                </PointBar>
              </Col>
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