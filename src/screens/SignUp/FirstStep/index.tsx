import React from "react";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Backbutton } from "../../../components/Backbutton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
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

export function SignUpFirstStep(){
    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container> 
                    <Header>
                        <Backbutton />
                        <BulletContainer>
                            <Bullet active/>
                            <Bullet />
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
                            <FormTitle>1. Dados</FormTitle>
                            <Input 
                                iconName="user"
                                placeholder="Nome"
                                autoCorrect={false}
                            />
                            <Input
                                iconName='mail'
                                placeholder='E-mail'
                                keyboardType='email-address'
                                autoCorrect={false}
                            />
                            <Input 
                                iconName="credit-card"
                                placeholder="CNH"
                                autoCorrect={false}
                            />
                            <Button 
                                    name='Login'
                                    enabled={true}
                                    style={{marginTop: 16}}
                                />
                        </Form>
                    </Content>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}