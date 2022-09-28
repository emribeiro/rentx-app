import styled from "styled-components/native";
import {RFValue} from 'react-native-responsive-fontsize';
import { FlatList } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.gray_secondary};
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

export const CarList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})`
    width: 100%;
`;
