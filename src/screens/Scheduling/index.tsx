import { useTheme } from "styled-components";
import { Backbutton } from "../../components/Backbutton";
import { 
    Container
  , Header
  , Title
  , RentalPeriod
  , DateInfo
  , DateTitle
  , DateValue
  , DateValueWrapper
  , Content
  , Footer
} from "./styles";

import ArrowSvg from "../../assets/arrow.svg";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";

export function Scheduling(){

    const theme = useTheme();

    return (
        <Container>
            <Header>
                <StatusBar 
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                />
                <Backbutton 
                    onPress={() => {}}
                    color={theme.colors.white}
                    />
                <Title>
                    Escolha uma {`\n`}
                    data de início e{`\n`}
                    fim do aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValueWrapper selected={true}>
                            <DateValue>20/10/1988</DateValue>
                        </DateValueWrapper>
                    </DateInfo>

                    <ArrowSvg />
                    <DateInfo>
                        <DateTitle>ATE</DateTitle>
                        <DateValueWrapper selected={false}>
                            <DateValue></DateValue>
                        </DateValueWrapper>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar />
            </Content>

            <Footer>
                <Button name="Confirmar" />
            </Footer>
        </Container>
    )
}