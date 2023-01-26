import { useNavigation } from "@react-navigation/native";
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
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }

    function handleNextStep(){
        navigation.navigate("SignUpSecondStep" as never);;
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
                                    name='Próximo'
                                    enabled={true}
                                    style={{marginTop: 16}}
                                    onPress={handleNextStep}
                                />
                        </Form>
                    </Content>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}