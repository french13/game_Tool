import styled from "styled-components"
import { Button } from "antd"
import {Routes, Route} from 'react-router-dom';

const Test = styled.div`
color : blue;
`


function App() : JSX.Element {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/detail" element={<div>디테일페이2지입니다</div>} />
        <Route/>
      </Routes>
    </div>
  )
}

export default App
