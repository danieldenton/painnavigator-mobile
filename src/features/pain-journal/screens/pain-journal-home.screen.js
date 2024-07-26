import React, { useContext, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { JournalTile } from "../../../components/journal-tile.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { PainGraph } from "../components/pain-graph.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { EducationContext } from "../../../services/education/education.context";
import { SafeView } from "../../../components/safe-area.component";
import { Scroll } from "../../../components/scroll.component";
import { SubHeader } from "../../../components/typography.component";
import { View } from "react-native";
import { GraphGraphic } from "../../../graphics";
import { GraphicWrapper } from "../../../components/journals/journal.styles";
import styled from "styled-components/native";
import { formatDateNoYear } from "../../../utils";

const HelpText = styled.Text`
  font-family: Inter_300Light;
  font-style: italic;
  font-size: 14px;
  margin-top: 9px;
  width: 90%;
`;

export const PainJournalHomeScreen = ({ navigation, route }) => {
  const { painJournals, loadPainJournals, isLoading } =
    useContext(PainJournalContext);
  const { additionalJournals } = useContext(EducationContext);
  const NAVIGATE_BACK_DESTINATION = route?.params?.postVideoAction
    ? "Today"
    : additionalJournals
    ? "Journals"
    : "Today";

  painJournals
    .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
    .reverse();

  const graphData = painJournals.map((painJournalScore) => {
    return {
      score: painJournalScore.intensity,
      date: formatDateNoYear(painJournalScore.date_time_value),
    };
  });

  const graphDataAfter = painJournals.map((painJournalScore) => {
    return {
      score: painJournalScore.intensity_after,
      date: formatDateNoYear(painJournalScore.date_time_value),
    };
  });

  useEffect(() => {
    loadPainJournals();
  }, []);

  const painJournalElements = painJournals?.map((journal) => {
    return (
      <JournalTile
        navigation={navigation}
        destination={"ReviewPainJournal"}
        journal={journal}
        key={journal.id}
      />
    );
  });

  return (
    <SafeView>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#37b29d"
          style={{ flex: 1, justifyContent: "center" }}
        />
      ) : (
        <>
          <NavigationBarLeft
            navigation={navigation}
            destination={NAVIGATE_BACK_DESTINATION}
            screen={"Pain Journal"}
          />
          {painJournals ? (
            <>
              <PainGraph
                graphData={graphData}
                graphDataAfter={graphDataAfter}
              />
            </>
          ) : (
            <>
              <GraphicWrapper>
                <GraphGraphic />
              </GraphicWrapper>
              <View
                style={{
                  marginTop: -12,
                  marginBottom: 12,
                  alignItems: "center",
                }}
              >
                <HelpText style={{ textAlign: "center" }}>
                  Tap "Add New Entry" to log your first pain score and watch how
                  your pain progresses over time.
                </HelpText>
              </View>
            </>
          )}
          <DailyActivitiesTile
            title={"Add New Entry"}
            destination={"NewPainJournal"}
            navigation={navigation}
          />
          {painJournals.length > 0 && (
            <SubHeader
              title={"PREVIOUS ENTRIES"}
              size={14}
              marginTop={32}
              marginBottom={14}
            />
          )}
          <Scroll style={{ marginBottom: 24 }}>{painJournalElements}</Scroll>
        </>
      )}
    </SafeView>
  );
};
