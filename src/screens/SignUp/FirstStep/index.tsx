import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Backbutton } from "../../../components/Backbutton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

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

export function SignUpFirstStep(){
    const navigation = useNavigation();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [driverLicense, setDriverLicense] = useState('');

    function handleGoBack(){
        navigation.goBack();
    }

    async function handleNextStep(){
        const schema = Yup.object().shape({
            name: Yup.string().required("O Nome é obrigatório"),
            email: Yup.string()
                    .email("O Email deve ser válido")
                    .required(),
            driverLicense: Yup.string().required("A CNH é obrigatória.")
        });

        const data = {name, email, driverLicense};
        try {
            await schema.validate(data);
            navigation.navigate("SignUpSecondStep" as never);;
        } catch (error) {
            if(error instanceof Yup.ValidationError){
                Alert.alert("Validação", error.message);
            }else{
                Alert.alert("Operação", error);
            }
        }
    }
    
    async function validateForm(){
        
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
                                onChangeText={setName}
                                value={name}
                            />
                            <Input
                                iconName='mail'
                                placeholder='E-mail'
                                keyboardType='email-address'
                                autoCorrect={false}
                                onChangeText={setEmail}
                                value={email}
                            />
                            <Input 
                                iconName="credit-card"
                                placeholder="CNH"
                                autoCorrect={false}
                                onChangeText={setDriverLicense}
                                value={driverLicense}                                
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