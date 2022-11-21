import axios from "axios"

import accelerationSvg from '../assets/acceleration.svg';
import speedSvg from '../assets/speed.svg';
import forceSvg from '../assets/force.svg';
import gasolineSvg from '../assets/gasoline.svg';
import electricSvg from '../assets/energy.svg';
import hybridSvg from '../assets/hybrid.svg';
import exchangeSvg from '../assets/exchange.svg';
import peopleSvg from '../assets/people.svg';
import { SvgProps } from "react-native-svg";
import { CarDto } from "../dtos/CarDto";

interface AccessoryIcon{
    type: string;
    icon: React.FC<SvgProps>;
}

const api = axios.create({
    baseURL: "http://localhost:3000"
})

const accessoryIcons : AccessoryIcon[] = [
    {type: 'speed', icon: accelerationSvg},
    {type: 'acceleration', icon: speedSvg},
    {type: 'turning_diameter', icon: forceSvg},
    {type: 'gasoline_motor', icon: gasolineSvg},
    {type: 'electric_motor', icon: electricSvg},
    {type: 'hybrid_motor', icon: hybridSvg},
    {type: 'exchange', icon: exchangeSvg},
    {type: 'seats', icon: peopleSvg},
]

export async function listCars(){
    const response = await api.get('/cars');

    return response.data;
}

export async function createSchedule(userId, car: CarDto, dateInterval: string[]){

    const response = await api.get(`/schedules_bycars/${car.id}`);
    const schedules = await api.get(`/schedules_byuser/${userId}`);

    const dates = [
        ...response.data.unavailable_dates,
        dateInterval
    ]

    await api.post("/schedules_byuser", {
        id: schedules.data.length + 1,
        user_id: userId,
        car,
        startDate: dateInterval[0],
        endDate: dateInterval[dateInterval.length - 1]
    });

    return api.put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates: dates
    });
}

export async function listRentalByUser(userId: number){
    const response = await api.get(`/schedules_byuser`);

    return response.data.filter((item) => item.user_id === userId);
}

export function getAccessoryTypeIcon(accessoryType: string){
    const accessory = accessoryIcons.find(item => item.type === accessoryType);

    return accessory.icon;
}