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
}

export function Input(
    {
        iconName,
        ...rest
    }: InputProps
){
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
            />
        </Container>
    );
}