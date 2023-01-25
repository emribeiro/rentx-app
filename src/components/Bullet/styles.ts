
import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

interface ImageIndexProps{
    active: boolean;
}

export const Container = styled.View``;

export const ImageIndex = styled.View<ImageIndexProps>`
    content: '';
    width: ${RFValue(6)}px;
    height: ${RFValue(6)}px;
    border-radius: ${RFValue(3)}px;
    background-color: ${({theme, active}) => active ? theme.colors.gray_title : theme.colors.gray_text_details};
    margin-right: ${RFValue(8)}px;
`;