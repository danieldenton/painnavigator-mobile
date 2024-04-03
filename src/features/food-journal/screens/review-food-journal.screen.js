import React from "react";
import { CompletedEntryCard } from "../components/completed-entry-card.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { NewFoodJournalEntry } from "../components/new-food-journal-entry.component";
import { SafeView } from "../../../components/safe-area.component";
import { Scroll } from "../../../components/scroll.component";

export const ReviewFoodJournalScreen = ({ route, navigation }) => {
  const journalCheck = (route) => {
    if (route) {
      const { journal } = route.params;
      return { journal };
    }
  };
  const { journal } = route.params;

  const meals = [
    {
      meal: "Breakfast",
      entry: journal ? journal.breakfast : "null",
      id: journal.id,
    },
    {
      meal: "Lunch",
      entry: journal ? journal.lunch : "null",
      id: journal.id,
    },
    {
      meal: "Dinner",
      entry: journal ? journal.dinner : "null",
      id: journal.id,
    },
    {
      meal: "Snacks",
      entry: journal ? journal.snacks : "null",
      id: journal.id,
    },
  ];

  const foodJournalEntryOptions = meals.map((meal, index) =>
    String(meal.entry) !== "null" ? (
      <CompletedEntryCard meal={meal} key={index} navigation={navigation} />
    ) : (
      <NewFoodJournalEntry
        meal={meal.meal}
        key={index}
        navigation={navigation}
        journalId={journal.id}
      />
    )
  );

  return (
    <SafeView>
      <NavigationBarLeft
        navigation={navigation}
        destination={"FoodJournalHome"}
        screen={"Food Journal"}
      />
      <Scroll style={{ paddingRight: 16, paddingLeft: 16 }}>
        {foodJournalEntryOptions}
      </Scroll>
    </SafeView>
  );
};
