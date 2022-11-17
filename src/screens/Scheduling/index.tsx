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
import { Calendar, DayProps, MarkedDatesProps } from "../../components/Calendar";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { generateInterval } from "../../components/Calendar/dateInterval";

export function Scheduling(){

    const theme = useTheme();
    const navigation = useNavigation();
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({} as MarkedDatesProps);

    function handleConfirmScheduling(){
        navigation.navigate('SchedulingDetails' as never);
    }

    function handleGoBack(){
        navigation.goBack();
    }

    function handleChangeDate(date: DayProps){
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if(start.timestamp > end.timestamp){
            start = end;
            end = start;
        }

        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedDates(interval);
    }
    return (
        <Container>
            <Header>
                <StatusBar 
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                />
                <Backbutton 
                    onPress={handleGoBack}
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
                <Calendar 
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />
            </Content>

            <Footer>
                <Button name="Confirmar" onPress={handleConfirmScheduling}/>
            </Footer>
        </Container>
    )
}