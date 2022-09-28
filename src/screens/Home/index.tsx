import React from "react";
import { StatusBar } from "react-native";
import Logo from '../../assets/logo.svg';
import { Container, Header, Title, HeaderContent, CarList } from "./styles";
import {RFValue} from 'react-native-responsive-fontsize';
import { CarCard } from "../../components/CarCard";

export function Home(){
    const data = {
        brand: "Audi",
        name: "RS 5 Coupé",
        rent: {
            period: "Ao dia",
            amount: 120
        }, 
        thumbnail: 'https://e7.pngegg.com/pngimages/262/890/png-clipart-audi-a5-2013-audi-rs-5-2014-audi-rs-5-sports-car-audi-sedan-car.png'
    }

    return (
        <Container >
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo 
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />

                    <Title>12 Carros para Aluguel</Title>
                </HeaderContent>
            </Header>

            <CarList
                data={[1,2,3,4]}
                keyExtractor={item => String(item)}
                renderItem={({item}) => <CarCard data={data} />}
             />
        </Container>
    )
}