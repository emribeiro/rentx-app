import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(RectButton)`

    width: 80px;
    height: 56px;

    background-color: ${({theme}) => theme.colors.shape_black};
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.white};
`;