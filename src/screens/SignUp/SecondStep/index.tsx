import React from "react";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Backbutton } from "../../../components/Backbutton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { PasswordInput } from "../../../components/PasswordInput";
import { useTheme } from "styled-components";

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

    function handleGoBack(){
        navigation.goBack();
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
                            />
                            <PasswordInput 
                                iconName="lock"
                                placeholder="Repetir Senha"
                            />
                            <Button 
                                    name='Cadastrar'
                                    enabled={true}
                                    style={{marginTop: 16}}
                                    color={theme.colors.green}
                                />
                        </Form>
                    </Content>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}