import React from 'react'
import styled from 'styled-components'

const RhunAbContainer = styled.div`
width : 100%;
height : 100%;
border : solid 1px white;
`

const mockData = {
    title : '분열',
    ab : '올스텟 1500'
}

const RhunAb = () => {
  return (
    <RhunAbContainer>
        <div>
            <div>{mockData.title}</div>
            <div>{mockData.ab}</div>
        </div>
    </RhunAbContainer>
  )
}

export default RhunAb