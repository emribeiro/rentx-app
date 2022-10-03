import { Container, Title } from "./styles";
import {RectButtonProps} from "react-native-gesture-handler";

interface Props extends RectButtonProps{
    name: string;
    color?: string;
}

export function Button( { name
                        , color
                        , ...rest}: Props){
    return (
        <Container {...rest} color={color}>
            <Title>{name}</Title>
        </Container>
    );
}