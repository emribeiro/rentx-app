import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { getAccessoryTypeIcon } from "../../api/api";
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
    const MotorIcon = getAccessoryTypeIcon(data.fuel_type);
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
                    <MotorIcon />
                </RentInfo>
            </Details>

            <CarImage 
                source={{uri: data.thumbnail}}
                resizeMode="contain"
            />
        </Container>
    )
}
