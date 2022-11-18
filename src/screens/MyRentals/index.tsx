import { useEffect, useState } from "react";
import { listRentalByUser } from "../../api/api";
import { CarDto } from "../../dtos/CarDto";
import { Container } from "./styles";

interface CarRentals{
    id: number;
    userId: number;
    car: CarDto;
    startDate: string;
    endDate: string;
}


export function MyRentals(){
    const [myRentals, setMyRentals] = useState<CarRentals[]>([]);



    useEffect(() => {
        async function getRentals(){
            const rentals = await listRentalByUser(1);
            setMyRentals(rentals);
        }

        getRentals();
    }, [])

    return (
        <Container>
            
        </Container>
    )
}