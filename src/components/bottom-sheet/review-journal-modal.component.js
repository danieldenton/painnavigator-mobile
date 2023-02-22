import React from "react";
import styled from "styled-components/native";
import { Close, Delete, Edit } from "../icons";
import { space } from "../infrastructure/theme/spacing";
import { track } from "@amplitude/analytics-react-native"

const CloseButtonRow = styled.View`
    margin-left: ${space[3]};
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: flex-end;
`; 

const CloseButton = styled.TouchableOpacity`
    padding: 16px;
`;

const OptionButton = styled.TouchableOpacity`
    align-items: center;
    border-top-color: hsl(218, 44%, 86%);
    border-top-width: .5px;
    flex-direction: row;
    margin-left: ${space[3]};
    margin-right: ${space[3]};
    height: 53px;
`;

const OptionIconSection = styled.View`
    width: 24px;
`;

const OptionText = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px;
    margin-left: ${space[4]};
`;

export const ReviewJournalModal = ({ closeModal, requestDelete, editJournal, trackEvent }) => {

    const handleTrackEvent = () => {
        if (trackEvent) {
            track(trackEvent)
        }
    }
    return (
        <>
            <CloseButtonRow>
                <CloseButton onPress={closeModal}>
                    <Close />
                </CloseButton>
            </CloseButtonRow>
            <OptionButton
                onPress={(handleTrackEvent(), editJournal)}
                style={{ borderBottomColor: "hsl(218, 44%, 86%)", borderBottomWidth: requestDelete ? 0 : .5 }}
            >
                <OptionIconSection>
                    <Edit />
                </OptionIconSection>
                <OptionText>Edit</OptionText>
            </OptionButton>
            {requestDelete && 
                <OptionButton 
                    onPress={requestDelete}
                    style={{ borderBottomColor: "hsl(218, 44%, 86%)", borderBottomWidth: .5 }}
                >
                    <OptionIconSection>
                        <Delete />
                    </OptionIconSection>
                    <OptionText>
                        Delete
                    </OptionText>
                </OptionButton>
            }
        </>
    );
};