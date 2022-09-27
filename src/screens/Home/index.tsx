import React from "react";
import { StatusBar } from "react-native";
import Logo from '../../assets/logo.svg';
import { Container, Header, Title, HeaderContent } from "./styles";
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

    const data2 = {
        brand: "Porshe",
        name: "Panamera",
        rent: {
            period: "Ao dia",
            amount: 340
        }, 
        thumbnail: 'https://img1.gratispng.com/20180202/vke/kisspng-2018-porsche-panamera-2017-porsche-panamera-2016-p-black-porsche-panamera-car-5a748f0243cbd2.3466104715175882262777.jpg'
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

            <CarCard data={data}/>
            <CarCard data={data2}/>
        </Container>
    )
}