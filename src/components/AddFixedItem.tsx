import { Button, Input } from 'antd'
import React from 'react'

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


const AddFixedItem = () => {
    return (
        <div>
            <div>AddFixedItem</div>
            <div>
                <div className='spaceBetween'>
                    <Input /><Button>추가</Button>
                </div>
                <div>
                    <Input type="date" />
                </div>
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
        </div>

    )
}

export default AddFixedItem