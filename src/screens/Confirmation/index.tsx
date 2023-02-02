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
import { useNavigation, useRoute } from "@react-navigation/native";

interface Params{
    title: String,
    message: String,
    nextRoute: String
}

export function Confirmation(){
    const navigation = useNavigation();
    const route = useRoute();

    const {title, message, nextRoute} = route.params as Params;
    

    function handleConfirmation(){
        navigation.navigate(nextRoute as never);
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
                <Title>{title}</Title>
                <Description>
                    {message}
                </Description>
            </Content>

            <Footer>
                <ConfirmButton title="Ok" onPress={handleConfirmation}/>
            </Footer>
        </Container>
    )
}