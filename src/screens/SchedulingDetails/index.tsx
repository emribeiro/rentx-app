import React from "react";
import {Feather} from "@expo/vector-icons";

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
import { useNavigation, useRoute } from "@react-navigation/native";
import { CarDto } from "../../dtos/CarDto";
import { createSchedule, getAccessoryTypeIcon } from "../../api/api";
import { RentalPeriod } from "../Scheduling";
import { Alert } from "react-native";

interface Params{
    car: CarDto;
    rentalPeriod: RentalPeriod
}

export function SchedulingDetails(){
    const theme = useTheme();
    const navigation = useNavigation();
    const route = useRoute();
    const {car, rentalPeriod} = route.params as Params;
    const totalRent = car.rent.price * rentalPeriod.interval.length;

    function handleConfirmation(){
        createSchedule(car.id, rentalPeriod.interval)
            .then(() => navigation.navigate('SchedulingComplete' as never))
            .catch(() => Alert.alert("Não foi possível realizar o agendamento."));
        ;
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
                        <DateValue>{rentalPeriod.start}</DateValue>
                    </ScheduleInfo>

                    <Feather 
                        name="chevron-right"
                    />

                    <ScheduleInfo>
                        <DateInfo>ATÉ</DateInfo>
                        <DateValue>{rentalPeriod.end}</DateValue>
                    </ScheduleInfo>
                        
                </ScheduleContent>

                <RentalTotalContent>
                    <RentalTotalInfo>
                        <RentalTotalLabel>
                            TOTAL
                        </RentalTotalLabel>
                        <RentalTotalDescription>
                            R$ {car.rent.price} x {rentalPeriod.interval.length} diárias
                        </RentalTotalDescription>
                    </RentalTotalInfo>
                    <RentalTotalAmount>
                        R$ {totalRent}
                    </RentalTotalAmount>
                </RentalTotalContent>
            </Content>
            <Footer>
                <Button name="Alugar agora" color={theme.colors.green} onPress={handleConfirmation}/>
            </Footer>
        </Container>
    )
}