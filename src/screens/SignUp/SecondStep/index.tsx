import React, { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Backbutton } from "../../../components/Backbutton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { PasswordInput } from "../../../components/PasswordInput";
import { useTheme } from "styled-components";
import * as Yup from "yup";

import {
    Container
  , Header
  , BulletContainer
  , Content
  , Title
  , Subtitle
  , Form
  , FormTitle
} from './styles';
import { useNavigation } from "@react-navigation/native";

export function SignUpSecondStep(){

    const theme = useTheme();
    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    function handleGoBack(){
        navigation.goBack();
    }

    async function handleSignUp(){
        const schema = Yup.object().shape({
            password: Yup.string().required("Senha é obrigatória"),
            passwordConfirmation: Yup.string()
                .oneOf([Yup.ref('password'), null], "As senhas devem ser iguais")
        })

        const data = {password, passwordConfirmation};

        try {
            await schema.validate(data);

            navigation.navigate( 'Confirmation' as never,
                    { title: "Conta Criada!"
                    , message: ''
                    , nextRoute: 'SignIn'
                    } as never
            )
        } catch (error) {
            if(error instanceof Yup.ValidationError){
                Alert.alert("Validação", error.message);
            }else{
                Alert.alert("Operação", error);
            }
        }
    }
    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container> 
                    <Header>
                        <Backbutton 
                            onPress={handleGoBack}
                        />
                        <BulletContainer>
                            <Bullet />
                            <Bullet active/>
                        </BulletContainer>
                    </Header>
                    <Content>
                        <Title>
                            Crie sua {'\n'}conta
                        </Title>
                        <Subtitle>
                            Faça seu cadastro de {'\n'}
                            forma rápida e fácil
                        </Subtitle>
                        <Form>
                            <FormTitle>2. Senha</FormTitle>
                            <PasswordInput
                                iconName='lock'
                                placeholder='Senha'
                                onChangeText={setPassword}
                                value={password}
                            />
                            <PasswordInput 
                                iconName="lock"
                                placeholder="Repetir Senha"
                                onChangeText={setPasswordConfirmation}
                                value={passwordConfirmation}
                            />
                            <Button 
                                    name='Cadastrar'
                                    enabled={true}
                                    style={{marginTop: 16}}
                                    color={theme.colors.green}
                                    onPress={handleSignUp}
                                />
                        </Form>
                    </Content>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}