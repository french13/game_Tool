import { Row, Col } from 'antd'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import MenuItems from './MenuItems'

const Navbar = styled.div`
position : absolute;
z-index : 1;
width : 100%;
height : 80px;
background-color : rgba(0,0,0,0.5);
display : flex;
`

const Header = () => {

  const MenuItemArray = [
    {id : 0, title : 'Tools', link : '/tools'},
    {id : 1, title : 'Community', link : '/community'},
    {id : 2, title : 'Question', link : '/question'},
    {id : 3, title : 'Admin', link : '/admin'},
  ]

  return (
    <Navbar>
      <Row style={{ width: '100%' }}>
        <Col xs={6}></Col>
        <Col xs={12} className='spaceBetween'>
          {
            MenuItemArray.map((item, i) => {
              return (
                <MenuItems key={item.id} {...item} />
              )
            })
          }
        </Col>
        <Col xs={6}></Col>
      </Row>

    </Navbar>
  )
}

export default Header