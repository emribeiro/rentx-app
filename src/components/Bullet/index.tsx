import React from "react";
import {
    Container,
    ImageIndex
} from './styles';

interface Props{
    active?: boolean;
}

export function Bullet({active = false}: Props){
    return (
        <Container>
            <ImageIndex 
                active={active} 
            />
        </Container>
    );
}