import React, { useContext } from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Locked } from "../../../icons";
import { MovementContext } from "../../../services/movement/movement.context";

const LockedCard = styled(Card)`
    margin-top: ${(props) => props.theme.space[3]};
    border-radius: 15px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 21px;
    padding-right: 22px;
    background-color: #EDF1F5;
`;

const LockedCardContent = styled(Card.Content)`
    flex-direction: row;
    padding: 0px;
    align-items: center;
`;

const CardTextSection = styled.View`
    flex: .8;
`;

const CardHeader = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px;
    color: #606C81;
`;

const CardSubHeader = styled.Text`
    color: #606C81;
    font-family: Inter_500Medium;
    font-size: 12px;
    margin-top: 8px;
`;

const CardIconSection = styled.View`
    flex: .2;
    align-items: flex-end;
    justify-content: center;
`;

export const LockedModule = () => {
    const { nextModule } = useContext(MovementContext);
    const { name, length } = nextModule;

    return (
        <LockedCard>
            <LockedCardContent>
                <CardTextSection>
                    <CardHeader>
                        {name}
                    </CardHeader>
                    <CardSubHeader>5 MIN</CardSubHeader>
                </CardTextSection>
                <CardIconSection>
                    <Locked />
                </CardIconSection>
            </LockedCardContent>
        </LockedCard>
    );
};