import { addDays, eachDayOfInterval, format } from "date-fns";
import { Platform } from "react-native";
import { DayProps, MarkedDatesProps } from ".";
import theme from "../../styles/theme";

function getPlatformDate(date: Date){
    if(Platform.OS == 'ios'){
        return addDays(date, 1);
    }else{
        return date;
    }
}


export function generateInterval(start: DayProps, end: DayProps){
    let intervalo: MarkedDatesProps = {};
    eachDayOfInterval({start: new Date(start.timestamp), end: new Date(end.timestamp)})
    .forEach((item) =>{
        const date = format(getPlatformDate(item), 'yyyy-MM-dd');

        intervalo = {
            ...intervalo,
            [date]: {
                color: start.dateString === date || end.dateString === date 
                    ? theme.colors.main : theme.colors.hover_red,
                textColor: start.dateString === date || end.dateString === date 
                    ? theme.colors.white : theme.colors.main,
            }
        }
    });

    return intervalo;
}
