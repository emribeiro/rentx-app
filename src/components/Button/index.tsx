import { Container, Title } from "./styles";
import {RectButtonProps} from "react-native-gesture-handler";

interface Props extends RectButtonProps{
    name: string;
    color?: string;
    enabled?: boolean;
    light?: boolean;
}

export function Button( { name
                        , color
                        , enabled = true
                        , light = false
                        , ...rest}: Props){
    return (
        <Container {...rest} color={color} enabled={enabled}>
            <Title light={light}>{name}</Title>
        </Container>
    );
}