import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    padding: 0 24px;
`;

export const Header = styled.View`
    margin-top: ${getStatusBarHeight() + 49}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const BulletContainer = styled.View`
    flex-direction: row;
`;

export const Content = styled.View`
    margin-top: 48px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_semibold};
    font-size: ${RFValue(40)}px;
    color: ${({theme}) => theme.colors.gray_title};
    margin-bottom: 16px;
`;

export const Subtitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_regular};
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.gray_title};
    line-height: ${RFValue(25)}px;

`;

export const Form = styled.View`
    margin-top: ${RFValue(48)}px;
`;

export const FormTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_semibold};
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.gray_title};
    margin-bottom: 24px;
`;