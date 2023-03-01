import styled from 'styled-components'
import { ContainerImg, ContentBox } from '../style/styledComponents'
import { Center } from '../style/Styled'
import { Col, Row } from 'antd'
import RhunDot from '../components/RhunDot'

const RhunContainer = styled.div`
${Center}
width : 100%;
height : 100%;
`

const RhunContentBox = styled.div`
border : solid 2px white;
width : 70%;
`


const Rhun = () => {



  return (
    <>
      <ContainerImg src="/image/rhunBg.png" alt="mainPageBg" />
      <ContentBox>
        <RhunContainer>
          <RhunContentBox>
            <Row>
              <Col xs={20}>
                게이지
              </Col>
              <Col xs={4}>
                <button>초기화</button>
              </Col>
            </Row>
            <Row>
              <Col xs={24} md={12} style={{position : 'relative'}}>
                <img src="/image/rhun.png" alt="rhunImg" width='100%' />
                <RhunDot/>
              </Col>
              <Col xs={24} md={12}>버프 내용</Col>
            </Row>
          </RhunContentBox>

        </RhunContainer>


      </ContentBox>
    </>
  )
}

export default Rhun