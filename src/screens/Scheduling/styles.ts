import styled, {css} from "styled-components/native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";
import {RFValue} from "react-native-responsive-fontsize";

interface DateWrapperProps{
    selected: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.white};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(325)}px;
    background-color: ${({theme}) => theme.colors.shape_black};
    padding: 24px;
    padding-top: ${getStatusBarHeight() + 32}px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_semibold};
    font-size: ${RFValue(34)}px;
    color: ${({theme}) => theme.colors.white};

    margin-top: 24px;
`;

export const RentalPeriod = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 32px 0;
`;

export const DateInfo = styled.View`
    width: 30%;
`;

export const DateTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_medium};
    font-size: ${RFValue(10)}px;
    color: ${({theme}) => theme.colors.gray_text_details};
`;

export const DateValueWrapper = styled.View<DateWrapperProps>`
    ${({selected, theme}) => !selected && css`
        
        border-bottom: 1px solid ${theme.colors.gray_text};
        padding-bottom: 5px;
    `}
`;

export const DateValue = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_medium};
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.white};
    margin-top: 8px;


`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 24
    },
    showsVerticalScrollIndicator: false
})``;

export const Footer = styled.View`
    padding: 24px;
`;