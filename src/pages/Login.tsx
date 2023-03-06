import { ContentBox, SignForm, SignInput, SignButton } from '../style/styledComponents'
import styled from 'styled-components'
import useInput from '../hooks/useInput'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()
  const [id, onChangeId] = useInput("")
  const [password, onChangePassword] = useInput("")

  const LogIn = async() => {
    await signInWithEmailAndPassword(auth, id, password).then(()=>{
      alert('로그인 성공')
      navigate('/')
    }).catch(()=>{
      alert('로그인 실패')
    })
  }

  const onSubmit = () => {
    LogIn()
  }

  return (
    <>
      <ContentBox>
        <SignForm onFinish={onSubmit}>
          <h1>Login</h1>
          <SignInput onChange={onChangeId} type="text" placeholder='아이디' name='LoginId' />
          <SignInput onChange={onChangePassword} type="text" placeholder='비밀번호' name='LoginPassword' />
          <SignButton htmlType='submit'>로그인</SignButton>
          회원가입
        </SignForm>
      </ContentBox>
    </>
  )
}

export default Login