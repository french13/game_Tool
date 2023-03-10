import { Input } from 'antd';
import styled from 'styled-components';
import { SpaceBetween } from '../style/Styled';
import { EditOutlined } from '@ant-design/icons'

const { Search } = Input;

const IllustInfo = styled.div`
`

const IllustItemBox = styled.div`
display : flex;
flex-direction : column;
justify-content : flex-start;
align-items : center;
min-height : 400px;
max-height : 400px;
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



const list = Array(10).fill(0).map((item, i) => {
    return (
        {
            id: '3',
            title: '인보크',
            ab: '체력+1, 마법력+2',
            place: '인보크의 둥지'
        }
    )
})
const coment = Array(2).fill(0).map((item, i) => {
    return (
        {
            id: '3',
            user: '라이언',
            date: new Date().getTime(),
            coment: '이거 솔직히 그 사냥터에서 안나와요'
        }
    )
})

const IllustResult = () => {
    return (
        <>
            <IllustItemBox style={{ padding: '10px' }}>
                {
                    list.map((item) => {
                        return (
                            <IllustItem>
                                <div>{item.title}</div>
                                <div style={{ color: 'lightgray' }}>{item.ab}</div>
                                <div style={{ color: 'lightgray' }}>{item.place}</div>
                                <button style={{ color: 'rgb(255,204,051)', border: 'none', background: 'none' }}>
                                    상세 삭제
                                </button>
                            </IllustItem>
                        )
                    })
                }
            </IllustItemBox>
            <IllustInfo style={{ padding: '20px' }} >
                <div style={{ textAlign: 'right' }}>
                    <button style={{ border: 'none', background: 'none', color: 'white', fontSize: '1.7rem' }}>
                        <EditOutlined />
                    </button>
                </div>
                {
                    coment.map((item, i) => {
                        return (
                            <div style={{borderBottom : 'lightgray solid 2px', padding : '10px'}}>
                                <div style={{marginBottom : '5px'}}>
                                    <span style={{fontSize : '1.1rem', color : 'lightgray'}}>{item.user}</span>
                                    <span style={{fontSize : '0.8rem', color : 'lightgray', marginLeft : '20px'}}>2023/10/03</span>
                                </div>
                                <div style={{fontSize : '1rem', color : 'lightgray'}}>
                                    {item.coment}
                                </div>
                            </div>
                        )
                    })
                }
            </IllustInfo>
        </>
    )
}

export default IllustResult