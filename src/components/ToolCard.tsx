import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {Row, Col} from 'antd';
import ToolCardAnimation from './ToolCardAnimation';

const Card = styled.div`
width : 280px;
height : 500px;
perspective : 1400px;
background
`

const CardImg = styled.img`
position : absolute;
object-fit : cover;
width : 100%;
height : 100%;
border-radius : 10px;
`

interface item {
    id: number;
    title: string;
    link: string;
    imgSrc : string;
}

const ToolCard = (item: item) => {

    

    return (
        <Link to={item.link}>
            <Card>
                <ToolCardAnimation>
                    <CardImg src={item.imgSrc} alt="toolImg" />
                </ToolCardAnimation>
            </Card>
        </Link>
    )
}

export default ToolCard