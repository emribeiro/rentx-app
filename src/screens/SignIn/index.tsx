
import React, {useState} from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar } from 'react-native'
import { Button } from '../../components/Button'
import { useTheme } from 'styled-components';
import {
    Container,
    Header,
    Title,
    SubTitle,
    Form,
    Footer
} from './styles'
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

export function SignIn(){
    const theme = useTheme();
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignIn(){
        const schema = Yup.object().shape({
            email: Yup.string().required("O e-mail é obrigatório"),
            password: Yup.string().required("A senha é obrigatória")
        });

        try {
            await schema.validate({ email, password});
        } catch (error) {
            if(error instanceof Yup.ValidationError){
                Alert.alert("Validação", error.message);
            }else{
                Alert.alert("Operação", "Erro na realização do Login");
            }
        }
    }

    function handleSignUp(){
        navigation.navigate("SignUpFirstStep" as never);
    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <StatusBar
                        barStyle='dark-content'
                        translucent
                    />
                    <Header>
                        <Title>
                            Estamos {'\n'}
                            quase lá
                        </Title>
                        <SubTitle>
                            Faça seu login para começar {'\n'}
                            uma experiência incrível.
                        </SubTitle>
                    </Header>

                    <Form>
                        <Input
                            iconName='mail'
                            placeholder='E-mail'
                            keyboardType='email-address'
                            autoCorrect={false}
                            value={email}
                            onChangeText={setEmail}
                        />
                        <PasswordInput
                            iconName='lock'
                            placeholder='Senha'
                            value={password}
                            onChangeText={setPassword}
                        />
                    </Form>
                    <Footer>
                        <Button 
                            name='Login'
                            enabled={true}
                            style={{marginBottom: 8}}
                            onPress={handleSignIn}
                        />
                        <Button 
                            name='Criar conta gratuita'
                            enabled={true}
                            color={theme.colors.white}
                            light={true}
                            onPress={handleSignUp}
                        />
                    </Footer>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView> 
    )
}