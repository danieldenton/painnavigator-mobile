import React, { useContext, useEffect, useState } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { ExpandableCard } from "../components/expandable-card.component";
import { MovementContext } from "../../../services/movement/movement.context";
import { EducationContext } from "../../../services/education/education.context";
import { educationModules } from "../../education/data/education-module-data.json";
import { Scroll } from "../../../components/scroll.component";
import { View } from "react-native";

export const EducationUnitsScreen = ({ navigation }) => {
    const { bookmarks } = useContext(BookmarksContext);
    const { completedEducationModules, completeSkippedUnit, skippedEducationModules } = useContext(EducationContext);
    const { setIsMovement } = useContext(MovementContext)
    const [bookmarkedEducationModuleData, setBookmarkedEducationModuleData] = useState([]);
    const [completedEducationModuleData, setCompletedEducationModuleData] = useState([]);
    const [skippedEducationModuleData, setSkippedEducationModuleData] = useState([]);

    useEffect(() => {
        setIsMovement(false)
    }, [])
    
    useEffect(() => {
        // the last education unit id is 62
        const firstMovementUnit = 63; 
        const educationBookmarks = bookmarks?.filter(bookmark => bookmark < firstMovementUnit);
        const data = educationBookmarks.map(bookmark => educationModules.find(item => item.id === bookmark));
        setBookmarkedEducationModuleData(data);
    }, [bookmarks]);

    useEffect(() => {
        const data = completedEducationModules?.map(module => educationModules.find(item => item.id === module));
        setCompletedEducationModuleData(data);
    }, [completedEducationModules]);

    useEffect(() => {
        const data = skippedEducationModules?.map(module => educationModules.find(item => item.id === module));
        setSkippedEducationModuleData(data);
    }, [skippedEducationModules]);

    return (
        <SafeView>
            <NavigationBarLeft 
                screen={"Education Units"} 
                destination={"UnitsHome"} 
                navigation={navigation} 
            />
            <Scroll style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 40 }}>
                <ExpandableCard
                    moduleType={"Education"}
                    navigation={navigation}
                    title={"Saved"}
                    units={bookmarkedEducationModuleData} 
                />
                <ExpandableCard 
                    completeSkippedUnit={completeSkippedUnit}
                    moduleType={"Education"}
                    navigation={navigation} 
                    title={"Skipped"} 
                    units={skippedEducationModuleData} 
                />
                <ExpandableCard 
                    moduleType={"Education"}
                    navigation={navigation} 
                    title={"Completed"} 
                    units={completedEducationModuleData} 
                />
                <View style={{ marginBottom: 12 }}></View>
            </Scroll>
        </SafeView>
    );
};