import { FlatList } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { CarDto } from "../../dtos/CarDto";


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
    justify-content: center;
    padding: 24px 16px;
`;

export const CarList = styled(FlatList as new () => FlatList<CarDto>).attrs({
    showsVerticalScrollIndicator: false
})`
    width: 100%;
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

export const CarWrapper = styled.View`
    margin-bottom: 16px;
`;
export const CarFooter = styled.View`
    margin-top: -14px;
    background-color: ${({theme}) => theme.colors.white};
`;
export const CarFooterContent = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 14px 24px;
`;
export const CarFooterTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_medium};
    font-size: ${RFValue(10)}px;
    color: ${({theme}) => theme.colors.gray_text_details};
`;
export const CarFooterPeriod = styled.Text``;
export const CarFooterDate = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_regular};
    font-size: ${RFValue(13)}px;
    color: ${({theme}) => theme.colors.gray_title};
`;