import React from "react";
import { Backbutton } from "../../components/Backbutton";
import { ImageSlider } from "../../components/ImageSlider";

import accelerationSvg from '../../assets/acceleration.svg';
import speedSvg from '../../assets/speed.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

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
       , Accessories
       , Footer
    } from "./styles";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";




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

                <Accessories>
                    <Accessory title="28 x 28" icon={speedSvg} />
                    <Accessory title="3.2s" icon={accelerationSvg} />
                    <Accessory title="800 HP" icon={forceSvg} />
                    <Accessory title="Gasolina" icon={gasolineSvg} />
                    <Accessory title="Auto" icon={exchangeSvg} />
                    <Accessory title="2 Pessoas" icon={peopleSvg} />
                </Accessories>
                <About>
                    Este é automóvel desportivo. 
                    Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. 
                    É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>
            <Footer>
                <Button name="Alugar" />
            </Footer>
        </Container>
    )
}