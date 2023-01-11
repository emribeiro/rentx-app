
import { Keyboard, KeyboardAvoidingView, StatusBar } from 'react-native'
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

export function SignIn(){
    const theme = useTheme();

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
                        />
                        <PasswordInput
                            iconName='lock'
                            placeholder='Senha'
                        />
                    </Form>
                    <Footer>
                        <Button 
                            name='Login'
                            enabled={false}
                            style={{marginBottom: 8}}
                        />
                        <Button 
                            name='Criar conta gratuita'
                            enabled={false}
                            color={theme.colors.white}
                            light={true}
                        />
                    </Footer>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView> 
    )
}