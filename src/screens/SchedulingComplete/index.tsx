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

export function SchedulingComplete(){
    return (
        <Container >
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
                <ConfirmButton title="Ok"/>
            </Footer>
        </Container>
    )
}