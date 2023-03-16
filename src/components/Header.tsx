import { Row, Col } from 'antd'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import MenuItems from './MenuItems'
import { Center, Logo } from '../style/Styled'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { signOut, onAuthStateChanged } from 'firebase/auth'


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
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false)
  const [displayName, setDisplayName] = useState<string | null>("")
  const [translateY, setTranslateY] = useState("-100%")

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("로그인 중" + user.displayName)
        setIsLogin(true)
        setDisplayName(user.displayName)
      } else {
        navigate('/login')
        setIsLogin(false)
      }
    })
  }, [])



  const MenuItemArray = [
    { id: 0, title: '게임 툴', link: '/' },
    { id: 1, title: '팁 게시판', link: '/gametip' },
    { id: 2, title: '문의하기', link: '/inquiry' },
    { id: 3, title: '내 정보', link: '/my' },
  ]

  const overLayIn = () => {
    setTranslateY('0%')
  }
  const overLayOut = () => {
    setTranslateY('-100%')
  }

  const logOut = () => {
    signOut(auth).then(() => {
      alert('로그아웃 성공')
    })
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
            {
              isLogin == false ?
                <>
                  <span><Link to='/login'>Login</Link></span>
                  <span><Link to='/register'>Sign Up</Link></span>
                </> :
                <>
                  <span>{displayName}</span>
                  <span onClick={logOut}>Logout</span>
                </>
            }
          </SignWrapper>
        </Col>
      </Row>

    </Navbar>
  )
}

export default Header