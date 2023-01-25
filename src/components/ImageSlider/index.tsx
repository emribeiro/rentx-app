import React, { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";
import { Bullet } from "../Bullet";
import {
     Container
   , IndexContent
   , ImageContent
   , CarImage
}from './styles'

interface Props{
    images: string[];
}

interface ImageChangeProps{
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function ImageSlider({images} : Props){
    const [imageIndex, setImageIndex] = useState(0);

    const indexChanged = useRef((info: ImageChangeProps) =>{
        setImageIndex(info.viewableItems[0].index!);
    });

    return (
        <Container>
            <IndexContent>
                {
                    images.map((_, index) => (
                        <Bullet 
                            key={index}
                            active={imageIndex === index} 
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
                onViewableItemsChanged={indexChanged.current}
            />
                
            
        </Container>
    )
}