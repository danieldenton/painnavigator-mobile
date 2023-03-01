import React from "react";
import { CompletedEntryCard } from "../components/completed-entry-card.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { NewFoodJournalEntry } from "../components/new-food-journal-entry.component";
import { SafeView } from "../../../components/safe-area.component";
import { Scroll } from "../../../components/scroll.component";
import { FOOD_JOURNAL_EVENTS } from "../../../amplitude-events";

export const ReviewFoodJournalScreen = ({ route, navigation }) => {
    const { journal } = route.params;

    const meals = [
        { 
        meal: "Breakfast", 
        trackViewMealEvent: FOOD_JOURNAL_EVENTS.VIEW_BREAKFAST, 
        entry: journal ? journal.breakfast : "null", 
        id: journal.id
        },
        { 
        meal: "Lunch", 
        trackViewMealEvent: FOOD_JOURNAL_EVENTS.VIEW_LUNCH, 
        entry: journal ? journal.lunch : "null", 
        id: journal.id
        },
        { 
        meal: "Dinner", 
        trackViewMealEvent: FOOD_JOURNAL_EVENTS.VIEW_DINNER, 
        entry: journal ? journal.dinner : "null", 
        id: journal.id 
        },
        { 
        meal: "Snacks", 
        trackViewMealEvent: FOOD_JOURNAL_EVENTS.VIEW_SNACKS,
        entry: journal ? journal.snacks : "null", 
        id: journal.id 
        },
    ];

    const foodJournalEntryOptions = meals.map((meal, index) => 
        String(meal.entry) !== "null" ? ( 
            <CompletedEntryCard meal={meal} key={index} navigation={navigation} /> 
        ) : (
            <NewFoodJournalEntry meal={meal.meal} trackViewMealEvent={meal.trackViewMealEvent} trackEvent={meal.trackEvent} key={index} navigation={navigation} journalId={journal.id} />
        )
    );

    return (        
        <SafeView>
            <NavigationBarLeft navigation={navigation} destination={"FoodJournalHome"} screen={"Food Journal"} />
            <Scroll style={{ paddingRight: 16, paddingLeft: 16 }}>
                {foodJournalEntryOptions}  
            </Scroll>
        </SafeView>
    );
};