import React from "react";
import { Backbutton } from "../../components/Backbutton";
import { ImageSlider } from "../../components/ImageSlider";
import { Container
       , Header 
       , Content
       , Details
       , Info
       , Brand
       , Name
       , Rent
       , Period
       , Amount
       , About
    } from "./styles";



export function CarDetails(){
    const images = ['https://img2.gratispng.com/20180920/ltc/kisspng-lamborghini-veneno-sports-car-2-17-lamborghini-ave-5ba37832266289.0695041815374397941572.jpg'];
    return (
        <Container >
            <Header>
                <Backbutton onPress={() => {}}/>
                <ImageSlider images={images}/>
            </Header>
            <Content>
                <Details>
                    <Info>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Info>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Amount>R$ 580</Amount>
                    </Rent>
                </Details>

                <About>
                    Este é automóvel desportivo. 
                    Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. 
                    É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>
        </Container>
    )
}