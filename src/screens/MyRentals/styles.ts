import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: 375px;
    background-color: ${({theme}) => theme.colors.shape_black};
    padding: 24px;
    padding-top: ${getStatusBarHeight() + 32}px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_semibold};
    font-size: ${RFValue(30)}px;
    color: ${({theme}) => theme.colors.white};

    margin-top: 80px;
`;

export const Subtitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_regular};
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.white};

    margin-top: 24px;
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    padding: 24px 16px;
`;
export const Appoinments = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 28px;
`;
export const AppoinmentsTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_regular};
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.gray_text};

`;
export const AppoinmentsQuantity = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_regular};
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.gray_title};

`;
