import styled from 'styled-components'
import { ContentBox, ContainerImg } from '../style/styledComponents'
import { CenterColumn, MainColor, SpaceBetween } from '../style/Styled'
import { Input, Button, Checkbox } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const list = Array(5).fill(0).map((item, i) => {
  return (
    {
      id: '3',
      title: '헌터 평판 돌기',
      context: '7개 돌아야됨'
    }
  )
})

const TodoContainer = styled.div`
${CenterColumn}
color : white;
width : 100%;
height : 100%;
`
const InputStyle = styled(Input)`
border : solid 2px ${MainColor};
border-radius : 50px;
`
const ButtonStyle = styled(Button)`
border-radius : 50px;
width : 20%;
border : solid 2px rgb(255,204,051);
color : rgb(255,204,051);
font-weight : 800;
background : black;
`
const TodoItemBox = styled.div`
min-height : 500px;
padding : 10px;
width : 100%;
display : flex;
flex-direction : column;
align-items : center;
`
const TodoItem = styled.div`
width : 100%;
${SpaceBetween}
padding : 10px;
padding-left : 20px;
margin : 10px;
background-color : rgba(0,0,0,0.7);
border : solid 2px ${MainColor};
border-radius : 50px;

button {
  border : none;
  background : none;
  color : ${MainColor};
  font-size : 1.3rem;
}
`


const Todo = () => {
  return (
    <>
      <ContainerImg src="/image/todoBg.png" alt="mainPageBg" />
      <ContentBox>

        <TodoContainer>
          <h1>할일 리스트</h1>
          <div style={{ width: "70%" }}>
            <div className='spaceBetween' style={{ width: '100%' }}>
              <InputStyle style={{ marginRight: '50px' }} type="text" />
              <ButtonStyle>추가</ButtonStyle>
            </div>
            <TodoItemBox>
              {
                list.map((item, i) => {
                  return (
                    <TodoItem>
                      <Checkbox />
                      <span>{item.title}</span>
                      <span>
                        <button>
                          <EditOutlined />
                        </button>
                        <button>
                          <DeleteOutlined />
                        </button>
                      </span>
                    </TodoItem>
                  )
                })
              }
            </TodoItemBox>
          </div>
        </TodoContainer>

      </ContentBox>
    </>
  )
}

export default Todo