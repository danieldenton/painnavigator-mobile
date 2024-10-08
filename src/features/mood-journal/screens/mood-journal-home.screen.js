import React, { useContext, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { GraphicWrapper } from "../../../components/journals/journal.styles";
import { JournalTile } from "../../../components/journal-tile.component";
import { MoodGraphic } from "../../../graphics";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { Scroll } from "../../../components/scroll.component";
import { SubHeader } from "../../../components/typography.component";

export const MoodJournalHomeScreen = ({ navigation }) => {
  const { loadMoodJournals, isLoading, moodJournals } =
    useContext(MoodJournalContext);

  useEffect(() => {
    loadMoodJournals();
  }, []);

  const moodJournalElements = moodJournals?.map((journal) => {
    return (
      <JournalTile
        navigation={navigation}
        destination={"ReviewMoodJournal"}
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
            destination={"Journals"}
            screen={"Mood Journal"}
          />
          <GraphicWrapper style={{ marginLeft: -16 }}>
            <MoodGraphic />
          </GraphicWrapper>
          <DailyActivitiesTile
            title={"Add New Entry"}
            destination={"NewMoodJournal"}
            navigation={navigation}
          />
          {moodJournals.length > 0 && (
            <SubHeader
              title={"PREVIOUS ENTRIES"}
              size={14}
              marginTop={34}
              marginBottom={14}
            />
          )}
          <Scroll style={{ marginBottom: 24 }}>{moodJournalElements}</Scroll>
        </>
      )}
    </SafeView>
  );
};
