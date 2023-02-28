import { Row, Col } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import MenuItems from './MenuItems'
import { Center, Logo } from '../style/Styled'
import { Link } from 'react-router-dom'

const Navbar = styled.div`
position : absolute;
z-index : 1;
width : 100%;
height : 80px;
display : flex;
`
const NavbarOverLay = styled.div<{ translateY: string }>`
position : absolute;
top : 0;
width : 100%;
height : 100%;
background-color : rgba(0,0,0,0.5);
transform : translateY(${props => props.translateY});
transition : all 0.3s;
`

const SignWrapper = styled.div`
${Center}
width : 100%;
height : 100%;
font-size : 20px;
color : white;

& > span {
  margin : 15px;
}
`

const LogoWrapper = styled.div`
width : 100%;
height : 100%;
padding-left : 50px;
${Center}
justify-content : left;
`

const Header = () => {
  const [translateY, setTranslateY] = useState("-100%")

  const MenuItemArray = [
    { id: 0, title: 'Tools', link: '/tools' },
    { id: 1, title: 'Community', link: '/community' },
    { id: 2, title: 'Question', link: '/question' },
    { id: 3, title: 'Admin', link: '/admin' },
  ]

  const overLayIn = () => {
    setTranslateY('0%')
  }
  const overLayOut = () => {
    setTranslateY('-100%')
  }

  return (
    <Navbar>
      <NavbarOverLay translateY={translateY} />
      <Row style={{ width: '100%' }}>
        <Col xs={6}>
          <LogoWrapper>
            <img src={Logo} alt="logo" />
          </LogoWrapper>
        </Col>
        <Col onMouseOver={overLayIn} onMouseOut={overLayOut} xs={12} className='spaceBetween'>
          {
            MenuItemArray.map((item, i) => {
              return (
                <MenuItems key={item.id} {...item} />
              )
            })
          }
        </Col>
        <Col xs={6} onMouseOver={overLayIn} onMouseOut={overLayOut}>
          <SignWrapper>
            <span><Link to='/login'>Login</Link></span>
            <span><Link to='/register'>Sign Up</Link></span>
          </SignWrapper>
        </Col>
      </Row>

    </Navbar>
  )
}

export default Header