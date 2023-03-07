import React from 'react'

import { Input, Select, Button, List, Skeleton } from 'antd';

const { Search } = Input;

const list = [{
    id: '3',
    title: '인보크',
    ab: '체력+1, 마법력+2',
    place: '인보크의 둥지'
},
{
    id: '3',
    title: '인보크',
    ab: '체력+1, 마법력+2',
    place: '인보크의 둥지'
}
]




const IllustResult = () => {
    return (
        <>
            <div>
                <List
                    style={{ backgroundColor: 'white' }}
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={list}
                    renderItem={(item) => (
                        <List.Item actions={[<button>리플</button>, <button>삭제</button>]}>
                            <List.Item.Meta
                                title={<span>{item.title}</span>}
                                description={[item.ab, item.place]}
                            />
                        </List.Item>
                    )}
                />
            </div>
            <div>
                <div>
                    <button>글쓰기</button>
                </div>
                <div>
                    <span>닉네임</span>
                    <span><button>삭제버튼</button></span>
                </div>
                <div>이거 도감 얻을려면 사실 다른 맵 가야 됩니다.</div>
            </div>
        </>
    )
}

export default IllustResult