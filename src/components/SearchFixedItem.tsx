import React from 'react'
import { Input } from 'antd'

const list = Array(5).fill(0).map((item, i) => {
    return (
        {
            id: i,
            title: '공격의 습득서',
            ability: '공격력+50',
            time: '15일'
        }
    )
})

const SearchFixedItem = () => {
    return (
            <div style={{ backgroundColor: 'red' }}>
                <div>SearchFixedItem</div>
                <Input />
                <div>
                    {
                        list.map((item, i) => {
                            return (
                                <div key={item.id}>
                                    <span>
                                        {item.title} / {item.time}
                                    </span>
                                    <span>
                                        {item.ability}
                                    </span>
                                    <span>
                                        <button>추가</button>
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )
}

export default SearchFixedItem