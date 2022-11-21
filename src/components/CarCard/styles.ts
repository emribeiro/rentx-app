import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
    width: 100%;
    height: 126px;
    padding: 16px;
    background-color: ${({theme}) => theme.colors.white};
    flex-direction: row;
    justify-content:space-between ;
    margin-bottom: 16px;

`;

export const Details = styled.View``;

export const CarInfo = styled.View``;

export const Brand = styled.Text`
    text-transform: uppercase;
    font-family: ${({theme}) => theme.fonts.secondary_medium};
    font-size: ${RFValue(10)}px;
    color: ${({theme}) => theme.colors.gray_text_details};
`;

export const Name = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_medium};
    font-size: ${RFValue(15)}px;
`;

export const RentInfo = styled.View`
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`;

export const RentDetail = styled.View`
    margin-top: 16px;
    gap: 8px;
`;

export const Period = styled.Text`
    text-transform: uppercase;
    font-family: ${({theme}) => theme.fonts.secondary_medium};
    font-size: ${RFValue(10)}px;
    color: ${({theme}) => theme.colors.gray_text_details};
    margin-bottom: 4px;
`;

export const Amount = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_medium};
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.main};
`;


export const CarImage = styled.Image`
    width: 160px;
    height: 92px;
`;