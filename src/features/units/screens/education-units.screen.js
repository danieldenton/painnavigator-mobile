import React, { useContext, useEffect, useState } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { ExpandableCard } from "../components/expandable-card.component";
import { BookmarksContext } from "../../../services/bookmarks/bookmarks.context";
import { EducationContext } from "../../../services/education/education.context";
import { educationModules } from "../../education/data/education-module-data.json";

export const EducationUnitsScreen = ({ navigation }) => {
    const { bookmarks } = useContext(BookmarksContext);
    const { completedEducationModules, completeSkippedUnit, skippedEducationModules } = useContext(EducationContext);
    const [bookmarkedEducationModuleData, setBookmarkedEducationModuleData] = useState({});
    const [completedEducationModuleData, setCompletedEducationModuleData] = useState({});
    const [skippedEducationModuleData, setSkippedEducationModuleData] = useState({});

    useEffect(() => {
        const educationBookmarks = bookmarks?.filter(bookmark => bookmark < 63);
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
        </SafeView>
    );
};