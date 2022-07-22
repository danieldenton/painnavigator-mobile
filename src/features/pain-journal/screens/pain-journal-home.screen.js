import React, { useContext } from "react";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { JournalTile } from "../../../components/journal-tile.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { PainGraph } from "../components/pain-graph.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { SafeView } from "../../../components/safe-area.component";
import { Scroll } from "../../../components/scroll.component";
import { SubHeader } from "../../../components/typography.component"
import { View, Text } from "react-native";
import { GraphGraphic } from "../../../graphics"; 
import { GraphicWrapper } from "../../../components/journals/journal.styles";
import styled from "styled-components/native";

const HelpText = styled.Text`
    font-family: Inter_300Light;
    font-style: italic;
    font-size: 14px;
    margin-top: 9px;
    width: 90%;
`;

export const PainJournalHomeScreen = ({ navigation, route }) => {
    const { painJournals, painGraphData } = useContext(PainJournalContext);
    const NAVIGATE_BACK_DESTINATION = route?.params?.postVideoAction ? "Today" : "Journals";

    const painJournalElements = painJournals?.map((journal) => {
        return (
            <JournalTile 
                navigation={navigation}
                destination={"ReviewPainJournal"}
                journal={journal.attributes}
                key={journal.id}
            />
        );
    });

    function noPainData() {
        return Object.keys(painGraphData.line).length === 0;
    };

    return(
        <SafeView>
            <NavigationBarLeft navigation={navigation} destination={NAVIGATE_BACK_DESTINATION} screen={"Pain Journal"} />
            {noPainData() ?
                <>
                    <GraphicWrapper>
                        <GraphGraphic />
                    </GraphicWrapper>
                    <View style={{ marginTop: -12, marginBottom: 12, alignItems: "center" }}>
                        <HelpText style={{ textAlign: "center" }}>
                            Tap "Add New Entry" to log your first pain score 
                            and watch how your pain progresses over time. 
                        </HelpText>
                    </View>
                </>
                :
                <PainGraph painGraphData={painGraphData} />
            }
            <DailyActivitiesTile 
                title={"Add New Entry"} 
                destination={"NewPainJournal"} 
                navigation={navigation} 
            />
            {painJournals.length > 0 && <SubHeader title={"PREVIOUS ENTRIES"} size={14} marginTop={32} marginBottom={14} />}
            <Scroll style={{ marginBottom: 24 }}>
                {painJournalElements}
            </Scroll>
        </SafeView>
    );
};