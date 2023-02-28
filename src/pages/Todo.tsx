import styled from 'styled-components'
import { ContentBox, ContainerImg } from '../style/styledComponents'
import { Center } from '../style/Styled'

const TodoContainer = styled.div`
${Center}
color : white;
`

const Todo = () => {
  return (
    <>
      <ContainerImg src="/image/todoBg.png" alt="mainPageBg" />
      <ContentBox>

        <TodoContainer>
          todo
        </TodoContainer>

      </ContentBox>
    </>
  )
}

export default Todo