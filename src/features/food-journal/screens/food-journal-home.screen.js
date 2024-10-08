import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeView } from "../../../components/safe-area.component";
import { FoodGraphic } from "../../../graphics";
import { GraphicWrapper } from "../../../components/journals/journal.styles";
import { NewJournalEntry } from "../../../components/journals/new-journal-entry.component";
import { JournalTile } from "../../../components/journal-tile.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { Scroll } from "../../../components/scroll.component";
import { SubHeader } from "../../../components/typography.component";
import { getFoodJournals } from "../../../services/food-journal/food-journal.service";
import { formatDate, foodJournalTimeZonedTodaysDate } from "../../../utils";

export const FoodJournalHomeScreen = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { setFoodJournals, foodJournals } = useContext(FoodJournalContext);
  const { uid } = useContext(AuthenticationContext);
  const lastFoodJournalDate = formatDate(foodJournals[0]?.date_time_value);
  const navigateBackDestination = route?.params?.postVideoAction
    ? "Today"
    : "Journals";

  const loadFoodJournals = async () => {
    try {
      setIsLoading(true);
      const journals = await getFoodJournals(uid);
      setFoodJournals(journals);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadFoodJournals();
  }, []);

  const foodJournalElements = foodJournals?.map((journal) => {
    return (
      <JournalTile
        navigation={navigation}
        destination={"ReviewFoodJournal"}
        journal={journal}
        key={journal.id}
      />
    );
  });

  const handleTodaysFoodJournal = () => {
    navigation.navigate("ReviewFoodJournal", {
      journal:
        lastFoodJournalDate === foodJournalTimeZonedTodaysDate &&
        foodJournals[0],
    });
  };

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
            destination={navigateBackDestination}
            screen={"Food Journal"}
          />
          <GraphicWrapper>
            <FoodGraphic />
          </GraphicWrapper>
          <TouchableOpacity onPress={() => handleTodaysFoodJournal()}>
            <NewJournalEntry title={"Today's Food Journal"} />
          </TouchableOpacity>
          {foodJournals.length > 0 && (
            <SubHeader
              title={"PREVIOUS ENTRIES"}
              size={14}
              marginTop={34}
              marginBottom={14}
            />
          )}
          <Scroll style={{ marginBottom: 24 }}>{foodJournalElements}</Scroll>
        </>
      )}
    </SafeView>
  );
};
