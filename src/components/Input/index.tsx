import React, {useState} from 'react';

import {Feather} from '@expo/vector-icons';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import {
    Container
,   IconContainer
,   InputText
}from './styles';

interface InputProps extends TextInputProps{
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export function Input(
    {
        iconName,
        value,
        ...rest
    }: InputProps
){
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const theme = useTheme();

    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!value);
    }
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
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                isFocused={isFocused}
            />
        </Container>
    );
}