import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import GasolineSvg from '../../assets/gasoline.svg';

import {
    Container
   , Details
   , CarInfo
   , Brand
   , Name
   , RentInfo
   , RentDetail
   , Period
   , Amount
   , CarImage
} from './styles'

interface CardData{
    brand: string;
    name: string;
    rent: {
        period: string;
        amount: number;
    }
    thumbnail: string;
}

interface Props extends RectButtonProps{
    data: CardData
}

export function CarCard({data, ...rest}: Props){
    const theme = useTheme();
    return(
        <Container {...rest}>
            <Details>
                <CarInfo>
                    <Brand>{data.brand}</Brand>
                    <Name>{data.name}</Name>
                </CarInfo>
                <RentInfo>
                    <RentDetail>
                        <Period>{data.rent.period}</Period>
                        <Amount>{`R$ ${data.rent.amount}`}</Amount>
                    </RentDetail>
                    <GasolineSvg 
                    />
                </RentInfo>
            </Details>

            <CarImage 
                source={{uri: data.thumbnail}}
                resizeMode="contain"
            />
        </Container>
    )
}
