
import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { Confirmation } from "../screens/Confirmation";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyRentals } from "../screens/MyRentals";
import { Splash } from "../screens/Splash";
import { SignIn } from "../screens/SignIn"
import {SignUpFirstStep} from "../screens/SignUp/FirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SecondStep";

export function StackRoutes(){

    const {Screen, Navigator} = createNativeStackNavigator();
    return (
        <Navigator screenOptions={{headerShown: false}} initialRouteName="SignIn">
            <Screen
                name="SignIn"
                component={SignIn}/>
            <Screen
                name="SignUpFirstStep"
                component={SignUpFirstStep}/>
            <Screen
                name="SignUpSecondStep"
                component={SignUpSecondStep}/>
            <Screen
                name="Splash"
                component={Splash}/>
            <Screen
                name="Home"
                component={Home}
                options={{
                    gestureEnabled: false
                }}
                />
            <Screen
                name="CarDetails"
                component={CarDetails}/>
            <Screen
                name="Scheduling"
                component={Scheduling}/>
            <Screen
                name="SchedulingDetails"
                component={SchedulingDetails}/>
            <Screen
                name="Confirmation"
                component={Confirmation}/>
            <Screen
                name="MyRentals"
                component={MyRentals}/>
        </Navigator>
    )
}