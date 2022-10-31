import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.black};
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    align-items: center;
    margin-top: ${RFValue(38)}px;
`;
export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_semibold};
    color: ${({theme}) => theme.colors.white};
    font-size: ${RFValue(30)}px;
    margin-bottom: 16px;
`;
export const Description = styled.Text`
    text-align: center;
    font-family: ${({theme}) => theme.fonts.primary_regular};
    color: ${({theme}) => theme.colors.gray_text_details};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(25)}px;

    padding-bottom: 80px;

`;
export const Footer = styled.View``;