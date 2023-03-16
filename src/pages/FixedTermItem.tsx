import React from 'react'
import { ContainerImg, ContentBox } from '../style/styledComponents'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import SearchFixedItem from '../components/SearchFixedItem'
import AddFixedItem from '../components/AddFixedItem'
import MyTimeItem from '../components/MyTimeItem'


const TimeItemContainer = styled.div`
width : 100%;
background-color : gray;
`

const FixedTermItem = () => {
  return (
    <>
      <ContainerImg src="/image/timeitemBg.png" alt="mainPageBg" />
      <ContentBox>
        <TimeItemContainer>
          <Row>
            <Col xs={24} md={12}>
              <SearchFixedItem />
              <AddFixedItem />
            </Col>
            <Col xs={24} md={12}>
              <MyTimeItem />
            </Col>
          </Row>
        </TimeItemContainer>
      </ContentBox>
    </>
  )
}

export default FixedTermItem