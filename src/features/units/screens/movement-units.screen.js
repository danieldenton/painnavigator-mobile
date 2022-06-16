import React, { useContext, useEffect, useState } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { ExpandableCard } from "../components/expandable-card.component";
import { BookmarksContext } from "../../../services/bookmarks/bookmarks.context";
import { MovementContext } from "../../../services/movement/movement.context";
import { movementVideos } from "../../movement/data/movement-videos-data.json";
import { Scroll } from "../../../components/scroll.component";
import { View } from "react-native";

export const MovementUnitsScreen = ({ navigation }) => {
    const { bookmarks } = useContext(BookmarksContext);
    const { completedMovementModules, completeSkippedUnit, skippedMovementModules } = useContext(MovementContext);
    const [bookmarkedMovementModuleData, setBookmarkedMovementModuleData] = useState([]);
    const [completedMovementModuleData, setCompletedMovementModuleData] = useState([]);
    const [skippedMovementModuleData, setSkippedMovementModuleData] = useState([]);

    useEffect(() => {
        const movementBookmarks = bookmarks?.filter(bookmark => bookmark > 62);
        const data = movementBookmarks.map(bookmark => movementVideos.find(item => item.id === bookmark));
        setBookmarkedMovementModuleData(data);
    }, [bookmarks]);

    useEffect(() => {
        const data = completedMovementModules?.map(module => movementVideos.find(item => item.id === module));
        setCompletedMovementModuleData(data);
    }, [completedMovementModules]);

    useEffect(() => {
        const data = skippedMovementModules?.map(module => movementVideos.find(item => item.id === module));
        setSkippedMovementModuleData(data);
    }, [skippedMovementModules]);

    return (
        <SafeView>
            <NavigationBarLeft 
                screen={"Movement Units"} 
                destination={"UnitsHome"} 
                navigation={navigation} 
            />
            <Scroll style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 40 }}>
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
                <View style={{ marginBottom: 12 }}></View>
            </Scroll>
        </SafeView>
    );
};