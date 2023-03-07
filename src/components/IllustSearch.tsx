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


const IllustSearch = () => {
    return (
        <>
            <div>
                <Search placeholder="input search text" enterButton />
                <Select
                    style={{ width: '100%' }}
                    defaultValue="Main search"
                    options={[
                        { value: '몬스터', label: 'monster' },
                        { value: '아이템', label: 'item' },
                        { value: '타이틀', label: 'title' },
                    ]}
                />
                <Select
                    style={{ width: '100%' }}
                    defaultValue="Sub Search"
                    options={[
                        { value: 'Lv-1 ~ Lv-100', label: 'lv1' },
                        { value: 'Lv-101 ~ Lv-200', label: 'lv101' },
                        { value: 'Lv-201 ~ Lv-300', label: 'lv201' },
                    ]}
                />
            </div>
            <div>
                <List
                    style={{ backgroundColor: 'white' }}
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={list}
                    renderItem={(item) => (
                        <List.Item actions={[<button>추가하기</button>]}>
                            <List.Item.Meta
                                title={<div>{item.title}</div>}
                                description={item.ab}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}

export default IllustSearch