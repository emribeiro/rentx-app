import { Container } from "./styles";
import LottieView from 'lottie-react-native';


export function LoadAnimation(){
    return (
        <Container>
            <LottieView 
                style={{
                    width: 100
                }}
                source={require('./../../assets/animation/loadingAnimation.json')}
                autoPlay
                loop
            />
        </Container>
    )
}