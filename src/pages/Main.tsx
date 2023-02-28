import React, { useState } from 'react'
import styled from 'styled-components'
import { ContainerImg, ContentBox } from '../style/styledComponents'
import { SpaceAround } from '../style/Styled'
import ToolCard from '../components/ToolCard'

const ToolContainer = styled(ContentBox)`
${SpaceAround}
padding-top : 250px;
`

const Main = () => {
    const Tools = [
        { id: 0, title: 'Todo', link: '/tools/todo', imgSrc : '/image/todoCard.png' },
        { id: 1, title: 'Rhun', link: '/tools/rhun', imgSrc : '/image/rhunCard.png' },
        { id: 2, title: 'Time Item', link: '/tools/fixedtermitem',  imgSrc : '/image/timeitemCard.png' },
        { id: 3, title: 'Illust', link: '/tools/illust',  imgSrc : '/image/illustCard.png' },
    ]

    return (
        <>
            <ContainerImg src="/image/mainBg.png" alt="mainPageBg" />
            <ToolContainer>
                {
                    Tools.map((item, i) => {
                        return (
                            <ToolCard key={item.id} {...item} />
                        )
                    })
                }


            </ToolContainer>
        </>
    )
}

export default Main