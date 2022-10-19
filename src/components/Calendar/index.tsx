import { Container } from "./styles";
import { Calendar as CustomCalendar
       , LocaleConfig
        } from 'react-native-calendars';
import { useTheme } from "styled-components";
import {Feather} from "@expo/vector-icons";


LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB']
}

LocaleConfig.defaultLocale = 'pt-br';

export function Calendar(){
    const theme = useTheme();
    return (
        <Container>
            <CustomCalendar
                renderArrow={(direction) => 
                    <Feather
                        size={24}
                        color={theme.colors.gray_text}
                        name={direction == "left" ? "chevron-left" : "chevron-right"} />
                }

                headerStyle={{
                    backgroundColor: theme.colors.white,
                    borderBottomWidth: 0.5,
                    borderBottomColor: theme.colors.gray_text_details,
                    paddingBottom: 10,
                    marginBottom: 10

                }}

                theme={{
                    textDayFontFamily: theme.fonts.primary_regular,
                    textDayHeaderFontFamily: theme.fonts.primary_medium,
                    textDayHeaderFontSize: 10,
                    textMonthFontSize: 18,
                    textMonthFontFamily: theme.fonts.secondary_semibold,
                    monthTextColor: theme.colors.gray_title,
                    arrowStyle: {
                        marginHorizontal: -15
                    }
                }}

                firstDay={1}
                minDate={new Date().toISOString()}
            />
        </Container>
    )
}