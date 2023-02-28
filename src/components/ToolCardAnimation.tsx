import {ReactElement, useState} from 'react'
import styled from 'styled-components'
import {Row,Col} from 'antd'

const AnimationWrapper = styled.div<{ rotateY: string, rotateX:string }>`
width : 100%;
height : 100%;
border-radius : 10px;
background-color : grey;
transform : rotateX(${props => props.rotateX}) rotateY(${props => props.rotateY});
transition : all 0.4s;
position : relative;
` 

const RowStyle = styled(Row)`
width : 100%;
height : 33%;
`
const ColStyle = styled(Col)`
width : 33.3%;
`

interface imgTag {
  children : ReactElement
}

const ToolCardAnimation = ({children} : imgTag) => {

    const [rotateX, setRotateX] = useState('0deg')
    const [rotateY, setRotateY] = useState('0deg')
 
    const animation = (X : string, Y : string)=>{
     setRotateX(X);
     setRotateY(Y)
    }
 
  return (
    <AnimationWrapper rotateX={rotateX} rotateY={rotateY} onMouseOut={()=> animation('0deg', '0deg')}>
      {children}
    <RowStyle>
        <ColStyle onMouseOver={()=> animation('5deg', '-5deg')} ></ColStyle>
        <ColStyle onMouseOver={()=> animation('10deg', '0deg')} ></ColStyle>
        <ColStyle onMouseOver={()=> animation('5deg', '5deg')} ></ColStyle>
    </RowStyle>
    <RowStyle>
        <ColStyle onMouseOver={()=> animation('0deg', '-10deg')}></ColStyle>
        <ColStyle onMouseOver={()=> animation('0deg', '0deg')}></ColStyle>
        <ColStyle onMouseOver={()=> animation('0deg', '10deg')}></ColStyle>
    </RowStyle>
    <RowStyle>
        <ColStyle onMouseOver={()=> animation('-5deg', '-5deg')}></ColStyle>
        <ColStyle onMouseOver={()=> animation('-5deg', '0deg')}></ColStyle>
        <ColStyle onMouseOver={()=> animation('-5deg', '5deg')}></ColStyle>
    </RowStyle>
    </AnimationWrapper>
  )
}

export default ToolCardAnimation