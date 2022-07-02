import React, { useContext, useState, useEffect } from "react";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { JournalTile } from "../../../components/journal-tile.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { PainGraph } from "../components/pain-graph.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { SafeView } from "../../../components/safe-area.component";
import { Scroll } from "../../../components/scroll.component";
import { SubHeader } from "../../../components/typography.component"

export const PainJournalHomeScreen = ({ navigation }) => {
    const { painJournals } = useContext(PainJournalContext);
    const [graphData, setGraphData] = useState([]);
    const [graphLine, setGraphLine] = useState([]);
    const [currentMonthData, setCurrentMonthData] = useState([]);

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

    const painGraphData = {
        "Jul": "7",
        "Aug": "5",
        "Sep": "4"
    };

    useEffect(() => {
        const painDataArray = [];
        const lineDataArray = [];
        Object.entries(painGraphData).forEach(([key, value]) => {
            painDataArray.push({ x: key, y: Number(value) });
            lineDataArray.push({ x: key, y: Number(value) });
        });
        setGraphLine(lineDataArray);
        const currentMonthArray = new Array(painDataArray.pop());
        setGraphData(painDataArray);
        setCurrentMonthData(currentMonthArray)
    }, []);

    return(
        <SafeView>
            <NavigationBarLeft navigation={navigation} destination={"Journals"} screen={"Pain Journal"} />
            <PainGraph currentMonthData={currentMonthData} graphData={graphData} graphLine={graphLine} />
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