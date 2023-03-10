import React from 'react'
import { Input, Select, Button } from 'antd';
import styled from 'styled-components';
import { SpaceBetween } from '../style/Styled';
import { PlusCircleOutlined } from '@ant-design/icons'

const SelectStyle = styled(Select)`
width : 92%;
margin : 5px 0;
color : yellow;
font-weight : 800;
background : black;
`

const ButtonStyle = styled(Button)`
border-radius : 50px;
width : 20%;
border : solid 2px rgb(255,204,051);
color : rgb(255,204,051);
font-weight : 800;
background : black;
`
const IllustItemBox = styled.div`
display : flex;
flex-direction : column;
justify-content : flex-start;
align-items : center;
max-height : 500px;
min-height : 400px;
overflow : auto;
`
const IllustItem = styled.div`
${SpaceBetween}
width : 92%;
padding : 5px;
margin : 5px 0;
border : solid 2px rgb(255,204,051);
border-radius : 5px;
color : white;
`

const list = Array(20).fill(0).map((item,i)=>{
    return (
        {
            id: '3',
            title: '인보크',
            ab: '체력+1, 마법력+2',
            place: '인보크의 둥지'
        }
    )
})


const IllustSearch = () => {
    return (
        <>
            <div className='spaceAroundColumn' style={{ padding: '10px' }}>
                <div className='spaceAround' style={{ padding: '10px', width: '100%' }} >
                    <Input style={{ width: '70%', borderRadius: "50px" }}
                        placeholder="input password" />
                    <ButtonStyle>
                        검색
                    </ButtonStyle>
                </div>
                <SelectStyle
                    defaultValue="Main search"
                    options={[
                        { value: '몬스터', label: 'monster' },
                        { value: '아이템', label: 'item' },
                        { value: '타이틀', label: 'title' },
                    ]}
                />
                <SelectStyle
                    defaultValue="Sub Search"
                    options={[
                        { value: 'Lv-1 ~ Lv-100', label: 'lv1' },
                        { value: 'Lv-101 ~ Lv-200', label: 'lv101' },
                        { value: 'Lv-201 ~ Lv-300', label: 'lv201' },
                    ]}
                />
            </div>
            <IllustItemBox style={{ padding: '10px' }}>
                {
                    list.map((item) => {
                        return (
                            <IllustItem>
                                <div>{item.title}</div>
                                <div style={{color : 'lightgray'}}>{item.ab}</div>
                                <button style={{color : 'rgb(255,204,051)', border: 'none', background : 'none'}}>
                                    <PlusCircleOutlined style={{fontSize : '1.5rem'}}/>
                                </button>
                            </IllustItem>
                        )
                    })
                }
            </IllustItemBox>
        </>
    )
}

export default IllustSearch