import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import {getStatusBarHeight, getBottomSpace} from "react-native-iphone-x-helper";
import {RFValue} from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    
`;

export const Header = styled.View`
    margin: ${getStatusBarHeight() + RFValue(24)}px 12px 12px 12px;
`;


export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        padding: 18,
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
    padding: 0 8px;
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

export const ScheduleContent = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 40px;

    border-bottom-width: 1px;
    border-bottom-color: ${({theme}) => theme.colors.gray_text_details};

    padding: 0 8px 16px 8px;

    align-items: center;

`;

export const IconContent = styled.View`
    width: 48px;
    height: 48px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.main};
`;

export const CalendarIcon = styled(Feather)`
    width: 24px;
    height: 24px;
`;
export const ScheduleInfo = styled.View`
    padding: 0 8px;
`;
export const DateInfo = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_medium};
    font-size: ${RFValue(10)}px;
    color: ${({theme}) => theme.colors.gray_text};
    text-transform: uppercase;
    margin-bottom: ${RFValue(8)}px;
`;

export const DateValue = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_medium};
    font-size: ${RFValue(15)}px;
`;

export const RentalTotalContent = styled.View`
    width: 100%;
    margin-top: ${RFValue(16)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const RentalTotalInfo = styled.View`
    padding: 0 8px;
`;
export const RentalTotalDescription = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_medium};
    font-size: ${RFValue(15)}px;
`;
export const RentalTotalLabel = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_medium};
    font-size: ${RFValue(10)}px;
    color: ${({theme}) => theme.colors.gray_text};
    text-transform: uppercase;
`;
export const RentalTotalAmount = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_medium};
    font-size: ${RFValue(24)}px;
    color: ${({theme}) => theme.colors.green};
`;

export const Accessories = styled.View`
    width: 100%;
    
    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;
    justify-content: space-around;
    margin-top: 16px;
`;

export const Footer = styled.View`
    width: 100%;
    background-color: ${({theme}) => theme.colors.gray_secondary};
    
    padding: 24px 24px ${getBottomSpace() + 24}px;
`;
