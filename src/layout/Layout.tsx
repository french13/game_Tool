import {Routes, Route} from 'react-router-dom'
import Admin from '../pages/Admin'
import Community from '../pages/Community'
import FixedTermItem from '../pages/FixedTermItem'
import Illust from '../pages/Illust'
import Login from '../pages/Login'
import Main from '../pages/Main'
import Question from '../pages/Question'
import Register from '../pages/Register'
import Rhun from '../pages/Rhun'
import Todo from '../pages/Todo'
import Tools from '../pages/Tools'
import { PageContainer } from '../style/styledComponents'

const Layout = () => {
  return (
   <PageContainer>
   <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='register' element={<Register/>}/>
    <Route path='tools' element={<Tools/>}/>
    <Route path='tools/todo' element={<Todo/>}/>
    <Route path='tools/rhun' element={<Rhun/>}/>
    <Route path='tools/fixedtermitem' element={<FixedTermItem/>}/>
    <Route path='tools/illust' element={<Illust/>}/>
    <Route path='community' element={<Community/>}/>
    <Route path='question' element={<Question/>}/>
    <Route path='admin' element={<Admin/>}/>
   </Routes>
   </PageContainer>
  )
}

export default Layout