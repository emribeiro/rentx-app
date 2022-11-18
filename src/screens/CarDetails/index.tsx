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
       , Accessories
       , Footer
    } from "./styles";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CarDto } from "../../dtos/CarDto";
import { getAccessoryTypeIcon } from "../../api/api";

interface Params{
    car: CarDto;
}


export function CarDetails(){
    const navigation = useNavigation();
    const route = useRoute();
    const {car} = route.params as Params;
    
    function handleRentalConfirmation(){
        navigation.navigate('Scheduling' as never, {car} as never);
    }

    function handleGoBack(){
        navigation.goBack();
    }
    
    return (
        <Container >
            <Header>
                <Backbutton onPress={handleGoBack}/>
                <ImageSlider images={car.photos}/>
            </Header>
            <Content>
                <Details>
                    <Info>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Info>

                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Amount>R$ {car.rent.price}</Amount>
                    </Rent>
                </Details>

                <Accessories>
                    {
                        car.accessories.map(accessory => 
                            <Accessory key={accessory.type} title={accessory.name} icon={getAccessoryTypeIcon(accessory.type)} />        
                        )
                    }
                </Accessories>
                <About>
                    {car.about}
                </About>
            </Content>
            <Footer>
                <Button name="Escolher Período do Aluguel" onPress={handleRentalConfirmation}/>
            </Footer>
        </Container>
    )
}