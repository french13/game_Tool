import styled from "styled-components";

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
`





export {PageContainer, ContainerImg, ContentBox}