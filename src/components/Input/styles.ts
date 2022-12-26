import styled from "styled-components/native";
import {TextInput} from "react-native";


export const Container = styled.View`
    flex-direction: row;
    margin-bottom: 8px;
`;

export const IconContainer = styled.View`
    width: 56px;
    height: 56px;
    align-items: center;
    justify-content: center;
    margin-right: 2px;
    background-color: ${({theme}) => theme.colors.white};
`;

export const InputText = styled(TextInput)`
    color: ${({theme}) => theme.colors.gray_text_details};
    background-color: ${({theme}) => theme.colors.white};
    flex: 1;
    padding-left: 8px;
`;