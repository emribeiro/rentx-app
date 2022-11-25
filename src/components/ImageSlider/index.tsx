import React from "react";
import { FlatList } from "react-native";
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
                {
                    images.map((_, index) => (
                        <ImageIndex 
                            key={index}
                            active={true} 
                        />
                    ))
                }
            </IndexContent>

            
            <FlatList
                data={images}
                keyExtractor={key => key}
                renderItem={({item}) =>
                <ImageContent>
                    <CarImage 
                        source={{uri: item}}
                        resizeMode="contain"
                    />
                </ImageContent>
                }
                horizontal
                showsHorizontalScrollIndicator={false}
            />
                
            
        </Container>
    )
}