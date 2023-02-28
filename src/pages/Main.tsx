import React, { useState } from 'react'
import styled from 'styled-components'
import { ContainerImg, ContentBox } from '../style/styledComponents'
import { SpaceAround } from '../style/Styled'
import ToolCard from '../components/ToolCard'

const ToolContainer = styled(ContentBox)`
${SpaceAround}
padding-top : 150px;
`

const Main = () => {
    const Tools = [
        { id: 0, title: 'Todo', link: '/tools/todo', imgSrc : 'image/tool1.jpg' },
        { id: 1, title: 'Time Item', link: '/tools/fixedtermitem',  imgSrc : 'image/tool2.jpg' },
        { id: 2, title: 'Illust', link: '/tools/illust',  imgSrc : 'image/tool3.jpg' },
        { id: 3, title: 'Comming Soon', link: '',  imgSrc : '' },
    ]

    return (
        <>
            <ContainerImg src="image/mainBg.png" alt="mainPageBg" />
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