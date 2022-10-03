import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 109px;
    height: 92px;

    background-color: ${({theme}) => theme.colors.gray_main};

    justify-content: center;
    align-items: center;

    padding: 16px;
    margin-bottom: 8px;
    margin-right: 6px;

`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_medium};
    color: ${({theme}) => theme.colors.gray_text};
    font-size: ${RFValue(13)}px;
    margin-top: 12px;
`;
