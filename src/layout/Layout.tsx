import {Routes, Route} from 'react-router-dom'
import My from '../pages/My'
import GameTip from '../pages/GameTip'
import FixedTermItem from '../pages/FixedTermItem'
import Illust from '../pages/Illust'
import Login from '../pages/Login'
import Main from '../pages/Main'
import Inquiry from '../pages/Inquiry'
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
    <Route path='gametip' element={<GameTip/>}/>
    <Route path='inquiry' element={<Inquiry/>}/>
    <Route path='my' element={<My/>}/>
   </Routes>
   </PageContainer>
  )
}

export default Layout