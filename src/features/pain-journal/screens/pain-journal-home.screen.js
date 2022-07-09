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

export const PainJournalHomeScreen = ({ navigation }) => {
    const { painJournals } = useContext(PainJournalContext);
    const [graphData, setGraphData] = useState([]);
    const [graphLine, setGraphLine] = useState([]);
    const [currentMonthData, setCurrentMonthData] = useState([]);
    const [x, setX] = useState([]);

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
        "Jul": "4"
    };

    const monthCount = Object.entries(painGraphData).length;

    const months = [
        {
            id: 1,
            month: "Jan"
        },
        {
            id: 2,
            month: "Feb"
        },
        {
            id: 3,
            month: "Mar"
        },
        {
            id: 4,
            month: "Apr"
        },
        {
            id: 5,
            month: "May"
        },
        {
            id: 6,
            month: "Jun"
        },
        {
            id: 7,
            month: "Jul"
        },
        {
            id: 8,
            month: "Aug"
        },
        {
            id: 9,
            month: "Sep"
        },
        {
            id: 10,
            month: "Oct"
        },
        {
            id: 11,
            month: "Nov"
        },
        {
            id: 12,
            month: "Dec"
        }
    ];

    
    useEffect(() => {
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
        if(monthCount === 3) {
            const d = [];
            const firstMonth = data[0].x;
            const secondMonth = data[1].x;
            const lastMonth = data[2].x; 
            d.push(firstMonth);
            d.push(secondMonth);
            d.push(lastMonth);
            const xData = new Array(firstMonth, secondMonth, lastMonth);
            return d;
        } else if (monthCount === 2) {
            const firstMonth = data[0].x;
            const lastMonth = data[1].x;
            const lastMonthData = months.find(month => month.month === lastMonth);
            const nextMonthData = months.find(month => month.id === lastMonthData.id + 1);
            const xData = new Array(firstMonth, lastMonth, nextMonthData.month);
            return xData;
        } else if (monthCount === 1) {
            const lastMonth = data[0].x;
            const lastMonthData = months.find(month => month.month === lastMonth);
            const nextMonthData = months.find(month => month.id === lastMonthData.id + 1);
            const twoMonthsData = months.find(month => month.id === lastMonthData.id + 2);
            const xData = new Array(lastMonth, nextMonthData.month, twoMonthsData.month);
            return xData;
        }
    };

    return(
        <SafeView>
            <NavigationBarLeft navigation={navigation} destination={"Journals"} screen={"Pain Journal"} />
            <PainGraph currentMonthData={currentMonthData} graphData={graphData} graphLine={graphLine} />
            <DailyActivitiesTile 
                title={"Add New Entry"} 
                destination={"NewPainJournal"} 
                navigation={navigation} 
            />
            <View>
                <Text>
                    {monthCount}
                    {x}
                </Text>
            </View>
            {painJournals.length > 0 && <SubHeader title={"PREVIOUS ENTRIES"} size={14} marginTop={32} marginBottom={14} />}
            <Scroll style={{ marginBottom: 24 }}>
                {painJournalElements}
            </Scroll>
        </SafeView>
    );
};