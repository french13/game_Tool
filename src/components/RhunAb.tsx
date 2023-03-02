import React from 'react'
import styled from 'styled-components'
import { FirstColor, SecondColor } from '../style/Styled'
import { useRecoilValue } from 'recoil'
import { rhunState } from '../recoil/RecoilState'

const RhunAbContainer = styled.div`
width : 100%;
height : 100%;
border : solid 2px ${FirstColor};
border-radius : 5px;
background-color : ${SecondColor}
`

const RhunAb = () => {
    const recoilRhunData = useRecoilValue(rhunState)
    console.log(recoilRhunData)
    return (
        <RhunAbContainer>
            {
                recoilRhunData.map((item) => {
                    return (
                        <div key={item.id} style={{ margin: '10px' }}>
                            <div>{item.title}</div>
                            <div>{item.ab}</div>
                        </div>
                    )
                })
            }

        </RhunAbContainer>
    )
}

export default RhunAb