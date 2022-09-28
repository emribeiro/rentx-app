import React from "react";
import { useTheme } from "styled-components";
import { Backbutton } from "../../components/Backbutton";
import { Container, Header } from "./styles";


export function CarDetails(){
    return (
        <Container >
            <Header>
                <Backbutton onPress={() => {}}/>
            </Header>
        </Container>
    )
}