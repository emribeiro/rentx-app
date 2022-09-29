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
                    source={{uri: 'https://img2.gratispng.com/20180920/ltc/kisspng-lamborghini-veneno-sports-car-2-17-lamborghini-ave-5ba37832266289.0695041815374397941572.jpg'}}
                    resizeMode="contain"
                />
            </ImageContent>
        </Container>
    )
}