import React from "react";
import {
     Container
   , IndexContent
   , ImageIndex
   , ImageContent
   , CarImage
}from './styles'

interface Props{
    images: string[];
}

export function ImageSlider({images} : Props){
    return (
        <Container>
            <IndexContent>
                <ImageIndex active={true} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
            </IndexContent>

            <ImageContent>
                <CarImage 
                    source={{uri: images[0]}}
                    resizeMode="contain"
                />
            </ImageContent>
        </Container>
    )
}