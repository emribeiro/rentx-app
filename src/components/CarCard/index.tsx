import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import GasolineSvg from '../../assets/gasoline.svg';
import { CarDto } from "../../dtos/CarDto";

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

interface Props extends RectButtonProps{
    data: CarDto
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
                        <Amount>{`R$ ${data.rent.price}`}</Amount>
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
