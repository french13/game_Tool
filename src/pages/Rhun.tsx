import styled from 'styled-components'
import { ContainerImg, ContentBox } from '../style/styledComponents'
import { Center, SecondColor } from '../style/Styled'
import { Col, Row } from 'antd'
import RhunDot from '../components/RhunDot'
import { useState } from 'react'
import RhunAb from '../components/RhunAb'

const RhunContainer = styled.div`
${Center}
width : 100%;
height : 100%;
`

const RhunContentBox = styled.div`
width : 70%;
`
const RhunImg = styled.img`
border : solid 2px ${SecondColor};
border-radius : 5px;
`

const Rhun = () => {


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
              <Col xs={24} md={2}>포인트게이지</Col>
              <Col xs={24} md={11}>
                <RhunAb/>
              </Col>
            </Row>
          </RhunContentBox>

        </RhunContainer>


      </ContentBox>
    </>
  )
}

export default Rhun