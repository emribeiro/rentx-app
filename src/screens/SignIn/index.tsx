
import { StatusBar } from 'react-native'
import { Button } from '../../components/Button'
import { useTheme } from 'styled-components';
import {
    Container,
    Header,
    Title,
    SubTitle,
    Footer
} from './styles'

export function SignIn(){
    const theme = useTheme();

    return (
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
            <Footer>
                <Button 
                    name='Login'
                    enabled={false}
                />
                <Button 
                    name='Criar conta gratuita'
                    enabled={false}
                    color={theme.colors.white}
                    light={true}
                />
            </Footer>
        </Container>
    )
}