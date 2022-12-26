import styled from "styled-components/native";
import {RectButton} from "react-native-gesture-handler";

interface ButtonProps{
    color?: string;
    
}

interface ButtonTextProps{
    light?: boolean
}

export const Container = styled(RectButton)<ButtonProps>`
    width: 100%;
    padding: 12px;

    background-color: ${({theme, color}) => color ? color : theme.colors.main};

    align-items: center;
    justify-content: center;
    

`;

export const Title = styled.Text<ButtonTextProps>`
    font-family: ${({theme}) => theme.fonts.primary_medium};
    color: ${({theme, light}) => light ? theme.colors.black : theme.colors.white};
`;