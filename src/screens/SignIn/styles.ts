import styled from "styled-components/native";
import {getStatusBarHeight} from "react-native-iphone-x-helper"

export const Container = styled.View`
    flex: 1;
    margin: 0 32px;
`;

export const Header = styled.View`
    margin-top: ${getStatusBarHeight() + 116}px;
`;

export const Title = styled.Text`
    font-size: 40px;
    line-height: 44px;
    color: ${({theme}) => theme.colors.gray_title};
    font-family: ${({theme}) => theme.fonts.secondary_semibold};
`;

export const SubTitle = styled.Text`
    font-size: 15px;
    line-height: 25px;
    color: ${({theme}) => theme.colors.gray_text};
    font-family: ${({theme}) => theme.fonts.primary_medium};
    margin-top: 16px;
`;

export const Footer = styled.View`
    margin-top: 64px;
`;