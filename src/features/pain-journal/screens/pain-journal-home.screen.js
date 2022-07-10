import React, { useContext, useState, useEffect } from "react";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { JournalTile } from "../../../components/journal-tile.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { PainGraph } from "../components/pain-graph.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { SafeView } from "../../../components/safe-area.component";
import { Scroll } from "../../../components/scroll.component";
import { SubHeader } from "../../../components/typography.component"
import { View, Text } from "react-native";
import { months } from "../data/months";
import { GraphGraphic } from "../../../graphics"; 
import { GraphicWrapper } from "../../../components/journals/journal.styles";
import styled from "styled-components/native";

const HelpText = styled.Text`
    font-family: Inter_300Light;
    font-style: italic;
    font-size: 14px;
    margin-top: 9px;
    width: 90%;
`;

export const PainJournalHomeScreen = ({ navigation }) => {
    const { painJournals } = useContext(PainJournalContext);
    const [graphData, setGraphData] = useState([]);
    const [graphLine, setGraphLine] = useState([]);
    const [currentMonthData, setCurrentMonthData] = useState([]);
    const [x, setX] = useState();

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
    
    };

    function noPainData() {
        return Object.keys(painGraphData).length === 0;
    }
    
    useEffect(() => {
        if(noPainData) {
            return;
        }
        const painDataArray = [];
        const lineDataArray = [];
        Object.entries(painGraphData).forEach(([key, value]) => {
            painDataArray.push({ x: key, y: value === null ? value : Number(value) });
            lineDataArray.push({ x: key, y: value === null ? value : Number(value) });
        });
        setGraphLine(lineDataArray);
        const currentMonthArray = new Array(painDataArray.pop());
        setGraphData(painDataArray);
        setCurrentMonthData(currentMonthArray)
        setX(fillMonths(lineDataArray));
    }, []);
    
    const fillMonths = (data) => {
        const monthCount = Object.entries(data).length;

        if(monthCount === 3) {
            const firstMonth = data[0].x;
            const secondMonth = data[1].x;
            const thirdMonth = data[2].x; 
            const xData = [`${firstMonth}`, `${secondMonth}`, `${thirdMonth}`];
            return xData;
        } else if (monthCount === 2) {
            const firstMonth = data[0].x;
            const secondMonth = data[1].x;
            const secondMonthData = months.find(month => month.month === secondMonth);
            const thirdMonthData = months.find(month => month.id === secondMonthData.id + 1);
            const xData = new Array(firstMonth, secondMonth, thirdMonthData.month);
            return xData;
        } else if (monthCount === 1) {
            const firstMonth = data[0].x;
            const firstMonthData = months.find(month => month.month === firstMonth);
            const secondMonthData = months.find(month => month.id === firstMonthData.id + 1);
            const thirdMonthData = months.find(month => month.id === firstMonthData.id + 2);
            const xData = new Array(firstMonth, secondMonthData.month, thirdMonthData.month);
            return xData;
        }
    };

    return(
        <SafeView>
            <NavigationBarLeft navigation={navigation} destination={"Journals"} screen={"Pain Journal"} />
            {noPainData() ?
                <>
                    <GraphicWrapper>
                        <GraphGraphic />
                    </GraphicWrapper>
                    <View style={{ marginTop: -12, marginBottom: 12, alignItems: "center" }}>
                        <HelpText style={{ textAlign: "center" }}>
                            Tap "Add New Entry" to log your first pain score 
                            and watch how your pain progresses over time. 
                        </HelpText>
                    </View>
                </>
                :
                <PainGraph currentMonthData={currentMonthData} graphData={graphData} graphLine={graphLine} x={x} />
            }
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