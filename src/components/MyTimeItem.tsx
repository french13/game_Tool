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

const MyTimeItem = () => {
    return (
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
                                <button>삭제</button>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MyTimeItem