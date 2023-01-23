
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
    value?: string;
}

export function PasswordInput(
    {
        iconName,
        value,
        ...rest
    }: InputProps
){
    const [isVisible, setIsVisible] = useState(true);

    function handleVisibility(){
        setIsVisible(isVisible => !isVisible);
    }

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!value);
    }

    const theme = useTheme();
    return (
        <Container>
            <IconContainer isFocused={isFocused}>
                <Feather 
                    name={iconName}
                    size={24}
                    color={(isFocused || isFilled) ? theme.colors.main : theme.colors.gray_text_details}
                />
            </IconContainer>
            <InputText 
                {...rest}
                secureTextEntry={isVisible}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                isFocused={isFocused}
            />
            <BorderlessButton onPress={handleVisibility}>
                <IconContainer isFocused={isFocused}>
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