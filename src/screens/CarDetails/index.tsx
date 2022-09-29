import React from "react";
import { Backbutton } from "../../components/Backbutton";
import { ImageSlider } from "../../components/ImageSlider";
import { Container, Header } from "./styles";



export function CarDetails(){
    return (
        <Container >
            <Header>
                <Backbutton onPress={() => {}}/>
                <ImageSlider />
            </Header>
        </Container>
    )
}