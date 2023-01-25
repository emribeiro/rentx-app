
import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { SchedulingComplete } from "../screens/SchedulingComplete";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyRentals } from "../screens/MyRentals";
import { Splash } from "../screens/Splash";
import { SignIn } from "../screens/SignIn"
import {SignUpFirstStep} from "../screens/SignUp/FirstStep";

export function StackRoutes(){

    const {Screen, Navigator} = createNativeStackNavigator();
    return (
        <Navigator screenOptions={{headerShown: false}} initialRouteName="SignUpFirstStep">
            <Screen
                name="SignIn"
                component={SignIn}/>
            <Screen
                name="SignUpFirstStep"
                component={SignUpFirstStep}/>
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
                name="SchedulingComplete"
                component={SchedulingComplete}/>
            <Screen
                name="MyRentals"
                component={MyRentals}/>
        </Navigator>
    )
}