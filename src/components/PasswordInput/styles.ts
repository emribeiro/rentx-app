import styled, {css} from "styled-components/native";
import {TextInput} from "react-native";
interface Props{
    isFocused: boolean;
}

export const Container = styled.View`
    flex-direction: row;
    margin-bottom: 8px;
`;

export const IconContainer = styled.View<Props>`
    width: 56px;
    height: 56px;
    align-items: center;
    justify-content: center;
    margin-right: 2px;
    background-color: ${({theme}) => theme.colors.white};

    ${({isFocused, theme}) => isFocused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.colors.main};
    `}
`;

export const InputText = styled(TextInput)<Props>`
    color: ${({theme}) => theme.colors.gray_text_details};
    background-color: ${({theme}) => theme.colors.white};
    flex: 1;
    padding-left: 8px;

    ${({isFocused, theme}) => isFocused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.colors.main};
    `}
`;