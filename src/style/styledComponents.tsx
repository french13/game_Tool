import styled from "styled-components";
import { Center, SpaceAroundColumn, FirstColor } from "./Styled";
import { Button, Form } from "antd";

const PageContainer = styled.div`
position : relative;
top : 0;
width : 100vw;
height : 100vh;
`
const ContainerImg = styled.img`
position : absolute;
object-fit : cover;
width : 100%;
height : 100%;
top : 0;
z-index : -1;
`
const ContentBox = styled.div`
width : 100%;
height : 100%;
${Center}
`
const SignForm = styled(Form)`
width : 600px;
border-radius : 30px;
${SpaceAroundColumn};
padding : 15px;
background-color : white;
box-shadow: 0 0 12px 6px rgb(0 0 0 / 10%);
`
const SignInput = styled.input`
width: 75%;
height : 60px;
border-radius : 50px;
margin : 10px 0;
background-color : rgb(240,240,240);
border : solid 2px lightgray;
padding : 0px 8%;
box-sizing : border-box;
font-size : 1.2rem;
`
const SignButton = styled(Button)`
width: 75%;
height : 60px;
border-radius : 50px;
margin : 10px 0;
color : white;
background-color : ${FirstColor};
font-size : 1.5rem;
`




export { PageContainer, ContainerImg, ContentBox, SignForm, SignInput, SignButton }