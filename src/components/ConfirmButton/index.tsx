import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title } from "./styles";


interface props extends RectButtonProps{
    title: string;
}

export function ConfirmButton({title, ...rest}: props){
    return (
        <Container {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}