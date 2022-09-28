import React from "react";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { Container } from "./styles";
import {MaterialIcons} from "@expo/vector-icons";
import { useTheme } from "styled-components";

interface Props extends BorderlessButtonProps{
    color?: string
}


export function Backbutton({color, ...rest}: Props){
    const theme = useTheme();
    return (
        <Container {...rest}>
            <MaterialIcons
                name="chevron-left"
                size={24}
                color={color ? color : theme.colors.gray_text}
            />
        </Container>
    )
}