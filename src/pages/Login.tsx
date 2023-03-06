import { ContentBox, SignForm, SignInput, SignButton } from '../style/styledComponents'
import styled from 'styled-components'


const Login = () => {
  return (
    <>
      <ContentBox>
        <SignForm>
          <h1>Login</h1>
          <SignInput type="text" placeholder='아이디' name='LoginId' />
          <SignInput type="text" placeholder='비밀번호' name='LoginPassword' />
          <SignButton>로그인</SignButton>
          회원가입
        </SignForm>
      </ContentBox>
    </>
  )
}

export default Login