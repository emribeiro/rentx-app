import React from "react";
import {Feather} from "@expo/vector-icons";

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
       , Accessories
       , Footer
       , ScheduleContent
       , CalendarIcon
       , ScheduleInfo
       , DateInfo
       , DateValue
       , IconContent
       , RentalTotalContent
       , RentalTotalInfo
       , RentalTotalDescription
       , RentalTotalLabel
       , RentalTotalAmount
    } from "./styles";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";




export function SchedulingDetails(){
    const images = ['https://img2.gratispng.com/20180920/ltc/kisspng-lamborghini-veneno-sports-car-2-17-lamborghini-ave-5ba37832266289.0695041815374397941572.jpg'];
    const theme = useTheme();
    const navigation = useNavigation();

    function handleConfirmation(){
        navigation.navigate('SchedulingComplete' as never);
    }
    function handleGoBack(){
        navigation.goBack();
    }
    return (
        <Container >
            <Header>
                <Backbutton onPress={handleGoBack}/>
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
                    <Accessory title="380km/h" icon={speedSvg} />
                    <Accessory title="3.2s" icon={accelerationSvg} />
                    <Accessory title="800 HP" icon={forceSvg} />
                    <Accessory title="Gasolina" icon={gasolineSvg} />
                    <Accessory title="Auto" icon={exchangeSvg} />
                    <Accessory title="2 Pessoas" icon={peopleSvg} />
                </Accessories>

                <ScheduleContent>
                    <IconContent>
                        <CalendarIcon
                            name="calendar"
                            size={RFValue(22)}
                            color={theme.colors.white}
                        />
                    </IconContent>
                    
                    <ScheduleInfo>
                        <DateInfo>DE</DateInfo>
                        <DateValue>18/06/2022</DateValue>
                    </ScheduleInfo>

                    <Feather 
                        name="chevron-right"
                    />

                    <ScheduleInfo>
                        <DateInfo>DE</DateInfo>
                        <DateValue>18/06/2022</DateValue>
                    </ScheduleInfo>
                        
                </ScheduleContent>

                <RentalTotalContent>
                    <RentalTotalInfo>
                        <RentalTotalLabel>
                            TOTAL
                        </RentalTotalLabel>
                        <RentalTotalDescription>
                            R$ 580 x 3 diárias
                        </RentalTotalDescription>
                    </RentalTotalInfo>
                    <RentalTotalAmount>
                        R$ 2.900
                    </RentalTotalAmount>
                </RentalTotalContent>
            </Content>
            <Footer>
                <Button name="Alugar agora" color={theme.colors.green} onPress={handleConfirmation}/>
            </Footer>
        </Container>
    )
}