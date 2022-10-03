import styled from "styled-components/native";

import {getStatusBarHeight} from "react-native-iphone-x-helper";
import {RFValue} from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    margin: ${getStatusBarHeight() + RFValue(24)}px 12px 12px 12px;
    
`;

export const Header = styled.View``;


export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        padding: 8,
        alignItems: 'center'
    }
})`
    width: 100%;
`;

export const Details = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 36px;
`;

export const Info = styled.View`
`;

export const Brand = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_medium};
    color: ${({theme}) => theme.colors.gray_text_details};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
`;

export const Name = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_medium};
    color: ${({theme}) => theme.colors.gray_title};
    font-size: ${RFValue(25)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_medium};
    color: ${({theme}) => theme.colors.gray_text_details};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
`;

export const Amount = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_medium};
    color: ${({theme}) => theme.colors.main};
    font-size: ${RFValue(25)}px;

`;

export const About = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_medium};
    color: ${({theme}) => theme.colors.gray_text_details};
    font-size: ${RFValue(15)}px;
    margin-top: 24px;
    line-height: ${RFValue(25)}px;
`;

export const Accessories = styled.View`
    width: 100%;
    
    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;
    margin-top: 16px;
`;
