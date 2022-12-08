import { Container } from "./styles";
import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export function Splash(){
    let animationValue = useSharedValue(0);
    const navigation = useNavigation();

    function navigateToHome(){
        navigation.navigate('Home' as never);
    }

    const brandAnimation = useAnimatedStyle(() => {
        return {
            opacity: interpolate(animationValue.value, [0,50], [1,0]),
            transform: [
                {
                    translateX: interpolate(animationValue.value, [0,50], [0,-50], Extrapolate.CLAMP)
                }
            ]
        }
    });

    const logoAnimation = useAnimatedStyle(() => {
        return {
            opacity: interpolate(animationValue.value, [0,50], [0,1]),
            transform: [
                {
                    translateX: interpolate(animationValue.value, [0,50], [-50,0], Extrapolate.CLAMP)
                }
            ]
        }
    });

    useEffect(() => {
        animationValue.value = withTiming(50, {
            duration: 1000
        },
        () => {
            'worklet'
            runOnJS(navigateToHome)();
        } 
        )
    }, []);

    return (
        <Container>
            <Animated.View style={[brandAnimation, {position: 'absolute'}]}>
                <BrandSvg />
            </Animated.View>

            <Animated.View style={[logoAnimation, {position: 'absolute'}]}>
                <LogoSvg />
            </Animated.View>
        </Container>
    )
}