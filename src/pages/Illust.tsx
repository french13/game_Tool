import React from 'react'
import { ContainerImg, ContentBox } from '../style/styledComponents'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import IllustSearch from '../components/IllustSearch'
import IllustResult from '../components/IllustResult'

const IllustContainer = styled(Row)`
width : 80%;
border : solid 4px rgb(153,102,051);
border-radius : 10px;
padding : 10px;
background-color : rgb(30,30,30);
`

const Illust = () => {
  return (
    <>
      <ContainerImg src="/image/illustBg.png" alt="mainPageBg" />
      <ContentBox>
        <IllustContainer>
          <Col xs={24} md={12}>
            <IllustSearch />
          </Col>
          <Col xs={24} md={12}>
            <IllustResult />
          </Col>
        </IllustContainer>
      </ContentBox>
    </>
  )
}

export default Illust