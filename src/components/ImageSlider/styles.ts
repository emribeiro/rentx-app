import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View``;

export const IndexContent = styled.View`
    position: absolute;
    top: ${RFValue(-18)}px;
    right: ${RFValue(16)}px;
    flex-direction: row;
`;

export const ImageContent = styled.View`
    align-items: center;
`;

export const CarImage = styled.Image`
    width: ${Dimensions.get('window').width}px;
    height: 132px;
`;