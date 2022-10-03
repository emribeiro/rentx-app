import React from "react";
import {SvgProps} from 'react-native-svg';
import {
     Container
   , Title
} from './styles'

interface Props{
    title: string;
    icon: React.FC<SvgProps>
}

export function Accessory({title, icon: Icon}: Props){
    return (
        <Container>
            <Icon width={32} height={32}/>
            <Title>{title}</Title>
        </Container>
    )
}