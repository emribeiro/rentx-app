import React, {useEffect, useState} from "react";
import { StatusBar } from "react-native";
import Logo from '../../assets/logo.svg';
import { Container, Header, Title, HeaderContent, CarList } from "./styles";
import {RFValue} from 'react-native-responsive-fontsize';
import { CarCard } from "../../components/CarCard";
import { useNavigation } from "@react-navigation/native";
import { listCars } from "../../api/api";
import { CarDto } from "../../dtos/CarDto";
import { Load } from "../../components/Load";

export function Home(){
    const [cars, setCars] = useState<CarDto[]>([]);
    const [loading, isLoading] = useState(true);

    const navigation = useNavigation();

    function handleCarSelection(car: CarDto){
        navigation.navigate('CarDetails' as never, car as never);
    }
    useEffect(() => {
        async function getCars(){
            try{
                const cars = await listCars();
                setCars(cars);
            }catch(error){
                console.log(error);
            }finally{
                isLoading(false);
            }
        }

        getCars();
    }, [])

    return (
        <Container >
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo 
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />

                    <Title>{cars.length} Carros para Aluguel</Title>
                </HeaderContent>
            </Header>

            {loading ? <Load/> : <CarList
                data={cars}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => <CarCard data={item} onPress={() => handleCarSelection(item)}/>}
             />}
        </Container>
    )
}