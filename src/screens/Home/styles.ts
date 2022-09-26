import styled from "styled-components/native";
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.white};
    align-items: center;
`;

export const HeaderContent = styled.View`
    justify-content: space-between;
    flex-direction: row;
    margin-top: ${RFValue(40)}px;
    align-items: center;
`;

export const Header = styled.View`
    width: 100%;
    height: 113px;
    background-color: ${({theme}) => theme.colors.black};
    padding: ${RFValue(16)}px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_medium};
    color: ${({theme}) => theme.colors.gray_text};
`;

