import { useTheme } from "styled-components";
import { Backbutton } from "../../components/Backbutton";
import { format } from "date-fns";
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
import { Alert, StatusBar } from "react-native";
import { Button } from "../../components/Button";
import { Calendar, DayProps, MarkedDatesProps } from "../../components/Calendar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { generateInterval } from "../../components/Calendar/dateInterval";
import { CarDto } from "../../dtos/CarDto";

interface RentalPeriod{
    start: string;
    end: string;
}

interface Params{
    car: CarDto;
}


export function Scheduling(){

    const theme = useTheme();
    const navigation = useNavigation();
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({} as MarkedDatesProps);
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

    const route = useRoute();
    const {car} = route.params as Params;

    function handleConfirmScheduling(){
        if(!!rentalPeriod.start || !!rentalPeriod.end){
            Alert.alert("Informe o periodo para aluguel.");
        }else{
            navigation.navigate('SchedulingDetails' as never, {car, rentalPeriod} as never);
        }
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

        setRentalPeriod({
            start: format(new Date(start.timestamp), 'dd/MM/yyyy'),
            end: format(new Date(end.timestamp), 'dd/MM/yyyy')
        });

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
                        <DateValueWrapper selected={!!rentalPeriod.start}>
                            <DateValue>{rentalPeriod.start}</DateValue>
                        </DateValueWrapper>
                    </DateInfo>

                    <ArrowSvg />
                    <DateInfo>
                        <DateTitle>ATE</DateTitle>
                        <DateValueWrapper selected={!!rentalPeriod.end}>
                            <DateValue>{rentalPeriod.end}</DateValue>
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