import { ContentBox, SignForm, SignInput, SignButton } from '../style/styledComponents'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from 'firebase/auth'
import useInput from '../hooks/useInput'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'

const Register = () => {
  const [name, onChangeName] = useInput("")
  const [id, onChangeId] = useInput("")
  const [password, onChangePassword] = useInput("")

  // 회원가입 기능
  const signUp = () => {
    createUserWithEmailAndPassword(auth, id, password).then((useCredential) => {
      const user = useCredential.user;
      updateDisplayName(user)
      addUsersCollection(user.uid)
      console.log(user)
    })
  }
  // 회원가입시 이름 적용
  const updateDisplayName = async(user: any) => {
  await  updateProfile(user, {
      displayName: name
    }).then(() => {
      alert(name + "님 가입을 환영합니다")
    })
  }
  // 회원가입시 users collection에 가입 유저 정보 추가
  const addUsersCollection = async(uid : any) => {
  await setDoc(doc(db, "users", uid), {
      uid : uid,
      name : name,
      id : id,
      date : serverTimestamp()
    })
  }

  const onSubmit = () => {
    signUp()
  }


  return (
    <>
      <ContentBox>
        <SignForm onFinish={onSubmit}>
          <h1>Sign Up</h1>
          <SignInput onChange={onChangeName} type="text" placeholder='닉네임' />
          <SignInput onChange={onChangeId} type="text" placeholder='아이디' />
          <SignInput onChange={onChangePassword} type="text" placeholder='비밀번호' />
          <SignInput type="text" placeholder='비밀번호 확인' />
          <SignButton htmlType='submit'>회원가입</SignButton>
        </SignForm>


      </ContentBox>
    </>
  )
}

export default Register