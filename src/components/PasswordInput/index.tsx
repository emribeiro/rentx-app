
import React, {useState} from 'react';
import {Feather} from '@expo/vector-icons';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import {
    Container
,   IconContainer
,   InputText
}from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';

interface InputProps extends TextInputProps{
    iconName: React.ComponentProps<typeof Feather>['name'];
}

export function PasswordInput(
    {
        iconName,
        ...rest
    }: InputProps
){
    const [isVisible, setIsVisible] = useState(true);

    function handleVisibility(){
        setIsVisible(isVisible => !isVisible);
    }

    const theme = useTheme();
    return (
        <Container>
            <IconContainer>
                <Feather 
                    name={iconName}
                    size={24}
                    color={theme.colors.gray_text_details}
                />
            </IconContainer>
            <InputText 
                {...rest}
                secureTextEntry={isVisible}
            />
            <BorderlessButton onPress={handleVisibility}>
                <IconContainer>
                    <Feather 
                        name={isVisible ? 'eye' : 'eye-off'}
                        size={24}
                        color={theme.colors.gray_text_details}
                    />
                </IconContainer>
            </BorderlessButton>
        </Container>
    );
}