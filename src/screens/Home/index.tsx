import React from "react";
import { StatusBar } from "react-native";
import Logo from '../../assets/logo.svg';
import { Container, Header, Title, HeaderContent } from "./styles";
import {RFValue} from 'react-native-responsive-fontsize';

export function Home(){
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
        </Container>
    )
}