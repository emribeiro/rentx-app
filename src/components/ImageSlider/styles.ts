import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';

interface ImageIndexProps{
    active: boolean;
}

export const Container = styled.View``;

export const IndexContent = styled.View`
    position: absolute;
    top: ${RFValue(-18)}px;
    right: ${RFValue(16)}px;
    flex-direction: row;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
    content: '';
    width: ${RFValue(6)}px;
    height: ${RFValue(6)}px;
    border-radius: ${RFValue(3)}px;
    background-color: ${({theme, active}) => active ? theme.colors.gray_title : theme.colors.gray_text_details};
    margin-right: ${RFValue(8)}px;
`;

export const ImageContent = styled.View`
    align-items: center;
`;

export const CarImage = styled.Image`
    width: ${Dimensions.get('window').width}px;
    height: 132px;
`;