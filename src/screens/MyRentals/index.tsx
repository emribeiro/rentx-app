import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { listRentalByUser } from "../../api/api";
import { Backbutton } from "../../components/Backbutton";
import { CarCard } from "../../components/CarCard";
import { CarDto } from "../../dtos/CarDto";
import { Container } from "./styles";
import {AntDesign} from "@expo/vector-icons";

import {
    Header,
    Title,
    Subtitle,
    Content,
    Appoinments,
    AppoinmentsTitle,
    AppoinmentsQuantity,
    CarList,
    CarWrapper,
    CarFooter,
    CarFooterContent, 
    CarFooterTitle,
    CarFooterPeriod,
    CarFooterDate
} from './styles';
import { Load } from "../../components/Load";

interface CarRentals{
    id: number;
    userId: number;
    car: CarDto;
    startDate: string;
    endDate: string;
}


export function MyRentals(){
    const [myRentals, setMyRentals] = useState<CarRentals[]>([]);
    const [loading, isLoading] = useState(true);
    const navigation = useNavigation();
    const theme = useTheme();

    function handleGoBack(){
        navigation.goBack();
    }

    useEffect(() => {
        async function getRentals(){
            try{
                const rentals = await listRentalByUser(1);
                setMyRentals(rentals);
            }catch(error){
                console.log(error);
            }finally{
                isLoading(false);
            }
        }

        getRentals();
    }, [])

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
                    Seus agendamentos, estão aqui.
                </Title>
                <Subtitle>
                    Conforto, segurança e praticidade.
                </Subtitle>
            </Header>
            {loading ? <Load /> : 
            <Content>
                <Appoinments>
                    <AppoinmentsTitle>Agendamentos feitos</AppoinmentsTitle>
                    <AppoinmentsQuantity>{myRentals.length}</AppoinmentsQuantity>
                </Appoinments>

                <CarList 
                    data={myRentals}
                    keyExtractor={(item) => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => 
                        <CarWrapper>
                            <CarCard data={item.car}/>
                            <CarFooter>
                                <CarFooterContent>
                                    <CarFooterTitle>
                                        PERÍODO
                                    </CarFooterTitle>
                                    <CarFooterPeriod>
                                        <CarFooterDate>{item.startDate}</CarFooterDate>
                                        <AntDesign
                                            name="arrowright"
                                            size={20}
                                            color={theme.colors.gray_text_details}
                                            style={{marginHorizontal: 10}}
                                        />
                                        <CarFooterDate>{item.endDate}</CarFooterDate>
                                    </CarFooterPeriod>
                                </CarFooterContent>
                            </CarFooter>
                        </CarWrapper>
                    }
                />

            </Content>
            }

        </Container>
    )
}