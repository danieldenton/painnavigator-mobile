import React, { useContext, useEffect, useState } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { ExpandableCard } from "../components/expandable-card.component";
import { BookmarksContext } from "../../../services/bookmarks/bookmarks.context";
import { MovementContext } from "../../../services/movement/movement.context";
import { movementVideos } from "../../movement/data/movement-videos-data.json";

export const MovementUnitsScreen = ({ navigation }) => {
    const { bookmarks } = useContext(BookmarksContext);
    const { completedMovementModules, completeSkippedUnit, skippedMovementModules } = useContext(MovementContext);
    const [bookmarkedMovementModuleData, setBookmarkedMovementModuleData] = useState({});
    const [completedMovementModuleData, setCompletedMovementModuleData] = useState({});
    const [skippedMovementModuleData, setSkippedMovementModuleData] = useState({});

    useEffect(() => {
        if (bookmarks.length === 0) {
            return
        };

        const movementBookmarks = bookmarks.filter(bookmark => bookmark > 62);
        const data = movementBookmarks.map(bookmark => movementVideos.find(item => item.id === bookmark));
        setBookmarkedMovementModuleData(data);

    }, [bookmarks]);

    useEffect(() => {
        if (completedMovementModules.length === 0) {
            return
        };

        const data = completedMovementModules.map(module => movementVideos.find(item => item.id === module));
        setCompletedMovementModuleData(data);

    }, [completedMovementModules]);

    useEffect(() => {
        if (skippedMovementModules.length === 0) {
            return
        };

        const data = skippedMovementModules.map(module => movementVideos.find(item => item.id === module));
        setSkippedMovementModuleData(data);

    }, [skippedMovementModules]);

    return (
        <SafeView>
            <NavigationBarLeft screen={"Movement Units"} destination={"Units"} navigation={navigation} />
            <ExpandableCard
                moduleType={"Movement"}
                navigation={navigation}
                title={"Saved"}
                units={bookmarkedMovementModuleData} 
            />
            <ExpandableCard 
                completeSkippedUnit={completeSkippedUnit}
                moduleType={"Movement"}
                navigation={navigation} 
                title={"Skipped"} 
                units={skippedMovementModuleData} 
            />
            <ExpandableCard 
                moduleType={"Movement"}
                navigation={navigation} 
                title={"Completed"} 
                units={completedMovementModuleData} 
            />
        </SafeView>
    );
};