import { 
     Container
   , Content
   , Title
   , Description
   , Footer
 } from "./styles";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import { ConfirmButton } from "../../components/ConfirmButton";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function SchedulingComplete(){
    const navigation = useNavigation();

    function handleConfirmation(){
        navigation.navigate('Home' as never);
    }
    return (
        <Container >
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <LogoSvg />

            <DoneSvg />

            <Content>
                <Title>Carro alugado!</Title>
                <Description>
                    Agora você só precisa ir {'\n'}
                    até a concessionária da RENTX {'\n'}
                    pegar o seu automóvel.
                </Description>
            </Content>

            <Footer>
                <ConfirmButton title="Ok" onPress={handleConfirmation}/>
            </Footer>
        </Container>
    )
}